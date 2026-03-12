# 08 — Determinants

## 1. Definition and Intuition

### Geometric Meaning (Most Important)
The **determinant** of a square matrix A measures the **signed volume scaling factor** of the linear transformation represented by A.

```
|det(A)| = factor by which A scales volumes (areas in 2D, volumes in 3D)

det(A) > 0: transformation preserves orientation
det(A) < 0: transformation reverses orientation (mirror flip)
det(A) = 0: transformation collapses space → NOT invertible
```

### 2D Visual Intuition
```
Standard unit square       After transformation A
(area = 1):                (area = |det(A)|):

(0,1)──(1,1)              A(0,1)──A(1,1)
  │        │         →       │           │
(0,0)──(1,0)              A(0,0)──A(1,0)

If A = ⎡2  0⎤,  det(A) = 4
       ⎣0  2⎦
The unit square becomes a 2×2 square with area 4 ✓
```

---

## 2. Computing Determinants

### 2×2 Matrix
```
A = ⎡a  b⎤
    ⎣c  d⎦

det(A) = ad - bc    ← memorize this!
```

**Example:**
```
A = ⎡3  2⎤
    ⎣1  4⎦

det(A) = 3·4 - 2·1 = 12 - 2 = 10
```

### 3×3 Matrix — Cofactor Expansion
**Sarrus' Rule** (expansion along first row):
```
A = ⎡a  b  c⎤
    ⎢d  e  f⎥
    ⎣g  h  i⎦

det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)
```

**Example:**
```
A = ⎡1  2  3⎤
    ⎢4  5  6⎥
    ⎣7  8  9⎦

det(A) = 1(5·9 - 6·8) - 2(4·9 - 6·7) + 3(4·8 - 5·7)
       = 1(45 - 48) - 2(36 - 42) + 3(32 - 35)
       = 1(-3) - 2(-6) + 3(-3)
       = -3 + 12 - 9 = 0

det = 0 → rows are linearly dependent (row3 = 2·row2 - row1)
```

### n×n Matrix — Cofactor Expansion (Recursive)
```
det(A) = Σⱼ Aᵢⱼ · Cᵢⱼ    (expand along row i)

where cofactor Cᵢⱼ = (-1)^(i+j) · Mᵢⱼ
and Mᵢⱼ = det of (n-1)×(n-1) matrix obtained by deleting row i and column j
```

**Sign pattern:**
```
⎡+  -  +  -⎤
⎢-  +  -  +⎥
⎢+  -  +  -⎥
⎣-  +  -  +⎦
```

**In practice**: use LU decomposition for large matrices — O(n³) vs exponential for cofactor expansion.

---

## 3. Determinant Properties

```
det(I) = 1
det(Aᵀ) = det(A)
det(AB) = det(A) · det(B)      ← KEY property
det(αA) = αⁿ · det(A)          (for n×n matrix A)
det(A⁻¹) = 1/det(A)
det(A) = 0 ↔ A is singular (not invertible)
det(A) = Πᵢ λᵢ                ← product of eigenvalues
```

### det(AB) = det(A)·det(B) — Why It Matters
```
If A scales volume by det(A) and B scales volume by det(B),
then AB first applies B (scaling by det(B)), then A (scaling by det(A)).
Total scaling = det(A)·det(B). ✓
```

### Effect of Row Operations on Determinant
| Row Operation | Effect on det |
|--------------|---------------|
| Swap two rows | Multiply by -1 |
| Scale row by c | Multiply by c |
| Add multiple of one row to another | No change |

---

## 4. Relationship to Linear Independence

```
A is invertible ↔ det(A) ≠ 0
              ↔ columns (rows) are linearly independent
              ↔ rank(A) = n
              ↔ Ax = 0 has only the trivial solution x = 0
              ↔ Ax = b has a unique solution for every b
```

### Testing Invertibility
```
A = ⎡1  2⎤    det = 4 - 6 = -2 ≠ 0  → invertible ✓
    ⎣3  4⎦

B = ⎡1  2⎤    det = 4 - 4 = 0  → singular ✗ (rows proportional!)
    ⎣2  4⎦
```

---

## 5. Determinant and Volume in Probability

### Change of Variables Formula
When transforming random variables x → y = f(x):
```
p_Y(y) = p_X(f⁻¹(y)) · |det(J⁻¹)|
        = p_X(x) / |det(J)|

where J = ∂y/∂x is the Jacobian matrix
```

The determinant of the Jacobian measures how the transformation **stretches or compresses probability mass**.

### Normalizing Flows (Advanced ML)
```
Normalizing flows learn invertible transformations f_θ: z → x
where z ~ simple distribution (e.g., Gaussian)

log p(x) = log p_Z(f_θ⁻¹(x)) + log|det(∂f_θ⁻¹/∂x)|

The log-determinant term accounts for the volume change.
Training requires computing and differentiating through det(J)!
```

### Multivariate Gaussian
```
p(x) = 1/((2π)^(d/2) · |det(Σ)|^(1/2)) · exp(-½(x-μ)ᵀΣ⁻¹(x-μ))

The term |det(Σ)|^(1/2) = volume normalization constant.
Large det(Σ) = widely spread distribution (large volume).
```

---

## 6. Computing Determinants Efficiently

### Via LU Decomposition
```
A = LU  (lower-triangular × upper-triangular)

det(A) = det(L) · det(U)
       = (Π diagonal of L) · (Π diagonal of U)
       = 1 · (Π Uᵢᵢ)    if L has 1s on diagonal

det is just product of diagonal of U after LU factorization!
```

### Log-Determinant
For probability computations, often use log|det(A)| for numerical stability:
```
log|det(A)| = Σᵢ log|Uᵢᵢ|    (sum of logs of U diagonal)
```

This avoids overflow/underflow when det is very large or very small.

---

## 7. Practice Problems

### Problem 1 — 2×2 Determinants
Compute det and state if invertible:
- a) A = [[2, 3], [1, 4]]
- b) B = [[6, 2], [3, 1]]
- c) C = [[-1, 2], [3, -6]]

### Problem 2 — 3×3 Determinant
```
A = ⎡2  1  0⎤
    ⎢1  3  1⎥
    ⎣0  1  2⎦
```
Expand along the first row to find det(A).

### Problem 3 — Properties
Given det(A) = 3 and det(B) = -2 (both 3×3):
- a) det(AB) = ?
- b) det(2A) = ?
- c) det(A⁻¹) = ?
- d) det(AᵀBᵀ) = ?

### Problem 4 — Eigenvalue Connection
Matrix A = [[4, 1], [2, 3]] has eigenvalues λ₁=5, λ₂=2.
- a) Verify det(A) = λ₁ · λ₂
- b) Verify tr(A) = λ₁ + λ₂

### Problem 5 — ML Application
The covariance matrix of a 2D Gaussian:
Σ = [[4, 2], [2, 3]]
- a) Compute det(Σ). What does it represent geometrically?
- b) The entropy of a d-dimensional Gaussian is: H = ½ log((2πe)^d · det(Σ))
  Compute H for d=2.

---

## Key Takeaways

✅ **det(A)** = signed volume scaling factor of the linear transformation A.
✅ **det(A) = 0** ↔ matrix is singular (not invertible, columns are dependent).
✅ **det(AB) = det(A)·det(B)** — volumes compose multiplicatively.
✅ **det(A) = product of eigenvalues** — connects to spectral analysis.
✅ In probability, the **Jacobian determinant** accounts for volume change under variable transformation.
✅ **Normalizing flows** explicitly compute and optimize log|det(J)| to learn complex distributions.
✅ Use **LU decomposition** for efficient computation; use **log-det** for numerical stability.

---

*Next: [09 — Inverse and Pseudoinverse](09_Inverse_and_Pseudo_Inverse.md)*