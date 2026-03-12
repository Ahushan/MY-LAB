# 09 — Matrix Inverse and Pseudoinverse

## 1. Matrix Inverse

### Definition
For a **square** matrix A ∈ ℝⁿˣⁿ, the **inverse** A⁻¹ satisfies:
```
A⁻¹A = AA⁻¹ = I
```

A⁻¹ exists if and only if **det(A) ≠ 0** (A is non-singular / invertible).

### 2×2 Inverse Formula
```
A = ⎡a  b⎤         A⁻¹ = 1/det(A) · ⎡ d  -b⎤
    ⎣c  d⎦                            ⎣-c   a⎦

= 1/(ad-bc) · ⎡ d  -b⎤
              ⎣-c   a⎦
```

**Example:**
```
A = ⎡3  1⎤    det(A) = 6 - 2 = 4
    ⎣2  2⎦

A⁻¹ = ¼ · ⎡ 2  -1⎤ = ⎡ 0.5  -0.25⎤
           ⎣-2   3⎦   ⎣-0.5   0.75⎦

Verify: AA⁻¹ = ⎡3  1⎤⎡ 0.5  -0.25⎤ = ⎡3·0.5+1·(-0.5)  3·(-0.25)+1·0.75⎤
               ⎣2  2⎦⎣-0.5   0.75⎦   ⎣2·0.5+2·(-0.5)  2·(-0.25)+2·0.75⎦
             = ⎡1  0⎤ = I  ✓
               ⎣0  1⎦
```

### General Inverse via Adjugate
```
A⁻¹ = (1/det(A)) · adj(A)

adj(A)ᵢⱼ = Cⱼᵢ  (cofactor matrix transposed)
```

Computationally expensive for large matrices — use LU decomposition instead.

---

## 2. Properties of Matrix Inverse

```
(A⁻¹)⁻¹ = A
(AB)⁻¹ = B⁻¹A⁻¹             ← Order reverses! (like transpose)
(Aᵀ)⁻¹ = (A⁻¹)ᵀ
(αA)⁻¹ = (1/α)A⁻¹
det(A⁻¹) = 1/det(A)
```

### (AB)⁻¹ = B⁻¹A⁻¹ — Why?
```
We need (AB)(AB)⁻¹ = I

(AB)(B⁻¹A⁻¹) = A(BB⁻¹)A⁻¹ = A·I·A⁻¹ = AA⁻¹ = I  ✓
```

---

## 3. Solving Linear Systems with Inverse

### When Unique Solution Exists
```
Ax = b   (A ∈ ℝⁿˣⁿ, invertible)

x = A⁻¹b
```

**But:** computing A⁻¹ explicitly is rarely done in practice — it's numerically unstable and expensive. Use direct solvers (LU, QR) instead.

### Linear Regression — Normal Equations
```
Design matrix X ∈ ℝⁿˣᵈ (n samples, d features)
Labels y ∈ ℝⁿ
Parameters w ∈ ℝᵈ

Minimize: ‖Xw - y‖²

Gradient = 0: Xᵀ(Xw - y) = 0
           → XᵀXw = Xᵀy
           → w = (XᵀX)⁻¹Xᵀy    ← NORMAL EQUATIONS

This requires XᵀX to be invertible (full column rank of X).
```

---

## 4. When the Inverse Doesn't Exist

A matrix is **singular** (non-invertible) when:
- det(A) = 0
- Columns are linearly dependent
- rank(A) < n
- The system Ax = b has either no solution or infinitely many solutions

### What We Do Instead: Pseudoinverse

---

## 5. Moore-Penrose Pseudoinverse

### Definition
For **any** matrix A ∈ ℝᵐˣⁿ (rectangular, singular, or otherwise), the **pseudoinverse** A⁺ ∈ ℝⁿˣᵐ satisfies four conditions (Moore-Penrose conditions):
```
1.  AA⁺A = A
2.  A⁺AA⁺ = A⁺
3.  (AA⁺)ᵀ = AA⁺
4.  (A⁺A)ᵀ = A⁺A
```

### Computing via SVD
```
A = UΣVᵀ   (SVD of A)

A⁺ = VΣ⁺Uᵀ

where Σ⁺ replaces each non-zero σᵢ with 1/σᵢ:

Σ = ⎡σ₁  0   0  0⎤         Σ⁺ = ⎡1/σ₁  0    0  ⎤  (transposed shape!)
    ⎢0   σ₂  0  0⎥              ⎢0    1/σ₂  0  ⎥
    ⎣0   0   0  0⎦              ⎣0    0     0  ⎦
```

### Example
```
A = ⎡1  0⎤  ∈ ℝ³ˣ²
    ⎢0  1⎥
    ⎣0  0⎦

SVD: U = I₃, Σ = ⎡1  0⎤, V = I₂
                  ⎢0  1⎥
                  ⎣0  0⎦

Σ⁺ = ⎡1  0  0⎤   (1/1 and 1/1 on diagonal)
     ⎣0  1  0⎦

A⁺ = V Σ⁺ Uᵀ = I₂ · ⎡1  0  0⎤ · I₃ = ⎡1  0  0⎤  ∈ ℝ²ˣ³
                     ⎣0  1  0⎦         ⎣0  1  0⎦
```

---

## 6. Pseudoinverse and Least Squares

### Overdetermined System (m > n, more equations than unknowns)
```
Ax = b   has no exact solution in general

Least-squares solution (minimize ‖Ax - b‖²):
x* = A⁺b

This gives the minimum-norm least-squares solution.
```

### Three Cases
```
Case 1: A is square and invertible (rank = n = m)
        A⁺ = A⁻¹   (pseudoinverse = regular inverse)
        x* = A⁻¹b  (unique solution)

Case 2: Overdetermined (m > n, full column rank)
        A⁺ = (AᵀA)⁻¹Aᵀ   (left inverse)
        x* = (AᵀA)⁻¹Aᵀb  (least-squares)

Case 3: Underdetermined (m < n, full row rank)
        A⁺ = Aᵀ(AAᵀ)⁻¹   (right inverse)
        x* = Aᵀ(AAᵀ)⁻¹b  (minimum-norm solution)
```

### Geometric Meaning
```
x* = A⁺b is the orthogonal projection of b onto C(A):

b = Ax* + r   where r ⊥ C(A)   (r is the residual)

‖r‖ = ‖b - Ax*‖ is minimized.
```

---

## 7. Linear Regression via Pseudoinverse

```
Problem: fit y ≈ Xw
         X ∈ ℝⁿˣᵈ, y ∈ ℝⁿ, w ∈ ℝᵈ

Usually n >> d (more samples than features) → overdetermined

w* = X⁺y = (XᵀX)⁻¹Xᵀy    (if X has full column rank)

XᵀX is d×d (small, invertible when features are independent)
Xᵀy is d×1
```

### Ridge Regression (Regularized Inverse)
When XᵀX is near-singular (collinear features), add regularization:
```
w* = (XᵀX + λI)⁻¹Xᵀy

(XᵀX + λI) is always invertible for λ > 0!
This shifts all eigenvalues of XᵀX up by λ.
```

---

## 8. Condition Number and Numerical Stability

### The Problem with Near-Singular Matrices
```
If A is nearly singular, small errors in b lead to HUGE errors in x = A⁻¹b.

Example: A = ⎡1.000  1.001⎤    b = [2.001]
             ⎣1.001  1.002⎦        [2.002]

True solution: x = [1, 1]ᵀ
Perturbed b:   b' = [2.002, 2.002]
Perturbed sol: x' ≈ [2, 0]ᵀ   (completely different!)
```

### Condition Number
```
κ(A) = ‖A‖ · ‖A⁻¹‖ = σ_max / σ_min

Large κ → ill-conditioned → small input changes → large output changes
```

This is why **gradient descent can converge slowly** on ill-conditioned problems, and why **preconditioning** and **batch normalization** improve training.

---

## Practice Problems

### Problem 1 — 2×2 Inverse
Find A⁻¹ for:
- a) A = [[5, 2], [3, 1]]
- b) B = [[4, 6], [2, 3]]  (check first if invertible!)

### Problem 2 — Verify Properties
With A = [[1,1],[0,1]] and B = [[2,0],[1,3]]:
- a) Compute (AB)⁻¹
- b) Compute B⁻¹A⁻¹
- c) Verify they're equal

### Problem 3 — Normal Equations
Data: (x,y) pairs: (1,2), (2,3.5), (3,4.5), (4,6)
Fit linear model y = w₀ + w₁x (include bias via X column of 1s):
```
X = ⎡1  1⎤    y = ⎡2.0⎤
    ⎢1  2⎥        ⎢3.5⎥
    ⎢1  3⎥        ⎢4.5⎥
    ⎣1  4⎦        ⎣6.0⎦
```
- a) Compute XᵀX
- b) Compute Xᵀy
- c) Solve w = (XᵀX)⁻¹Xᵀy
- d) What line does this represent?

### Problem 4 — Pseudoinverse
Find A⁺ for:
```
A = ⎡1  0⎤
    ⎢0  2⎥
    ⎣0  0⎦
```
Using the SVD: U=I₃, σ₁=1, σ₂=2, V=I₂.

### Problem 5 — Ridge vs OLS
XᵀX = [[4,0],[0,0.01]] (near-singular second feature):
- a) What is (XᵀX)⁻¹?
- b) What is (XᵀX + 0.1·I)⁻¹? (Ridge)
- c) Why is Ridge more stable here?

---

## Key Takeaways

✅ A⁻¹ exists ↔ det(A) ≠ 0 ↔ A is full rank ↔ columns are independent.
✅ **(AB)⁻¹ = B⁻¹A⁻¹** — inverse reverses order (same as transpose).
✅ The **pseudoinverse A⁺** works for **any** matrix — rectangular, singular, etc.
✅ **A⁺ = VΣ⁺Uᵀ** — computed via SVD by inverting non-zero singular values.
✅ **Linear regression** closed form = w = (XᵀX)⁻¹Xᵀy = pseudoinverse solution.
✅ **Ridge regression** = (XᵀX + λI)⁻¹Xᵀy — always invertible, more stable.
✅ Large **condition number** = ill-conditioned system = numerical instability.

---

*Next: [10 — Systems of Linear Equations](10_Systems_of_Linear_Equations.md)*