# 10 — Systems of Linear Equations

## 1. Setting Up the System

### General Form
A system of m equations in n unknowns:
```
a₁₁x₁ + a₁₂x₂ + ... + a₁ₙxₙ = b₁
a₂₁x₁ + a₂₂x₂ + ... + a₂ₙxₙ = b₂
⋮
aₘ₁x₁ + aₘ₂x₂ + ... + aₘₙxₙ = bₘ
```

### Matrix Form
```
Ax = b

where A ∈ ℝᵐˣⁿ,  x ∈ ℝⁿ,  b ∈ ℝᵐ
```

### Augmented Matrix
Combine A and b into one matrix for row reduction:
```
[A | b] = ⎡a₁₁  a₁₂  ...  a₁ₙ | b₁⎤
           ⎢a₂₁  a₂₂  ...  a₂ₙ | b₂⎥
           ⎣⋮                   | ⋮ ⎦
```

---

## 2. Solution Existence — Three Cases

```
Case 1: Unique solution     → rank(A) = rank([A|b]) = n
Case 2: Infinitely many     → rank(A) = rank([A|b]) < n
Case 3: No solution         → rank(A) < rank([A|b])
```

### Rouché-Capelli Theorem
```
Ax = b is consistent (has at least one solution) ↔ rank(A) = rank([A|b])
```

### Visual Interpretation (2 equations, 2 unknowns)
```
2x + y = 5        →  line₁
x - y = 1         →  line₂

Case 1 (unique): Lines intersect at one point → x=2, y=1
Case 2 (∞ many): Lines are identical (same equation scaled)
Case 3 (no sol): Lines are parallel (never meet)
```

---

## 3. Gaussian Elimination

### Algorithm
Transform the augmented matrix [A|b] to **row echelon form** using three elementary row operations:
1. Swap two rows: Rᵢ ↔ Rⱼ
2. Scale a row: Rᵢ → cRᵢ (c ≠ 0)
3. Add multiple of one row to another: Rᵢ → Rᵢ + cRⱼ

### Step-by-Step Example

**System:**
```
2x₁ + x₂ - x₃ = 8
-3x₁ - x₂ + 2x₃ = -11
-2x₁ + x₂ + 2x₃ = -3
```

**Step 1:** Write augmented matrix:
```
⎡ 2   1  -1 |  8⎤
⎢-3  -1   2 | -11⎥
⎣-2   1   2 | -3⎦
```

**Step 2:** Eliminate below pivot in column 1.
R₂ → R₂ + (3/2)R₁:
```
⎡ 2   1   -1  |  8  ⎤
⎢ 0  1/2  1/2 |  1  ⎥
⎣-2   1    2  | -3  ⎦
```
R₃ → R₃ + R₁:
```
⎡ 2   1   -1  |  8⎤
⎢ 0  1/2  1/2 |  1⎥
⎣ 0   2    1  |  5⎦
```

**Step 3:** Eliminate below pivot in column 2.
R₃ → R₃ - 4·R₂:
```
⎡ 2   1   -1  |  8⎤
⎢ 0  1/2  1/2 |  1⎥
⎣ 0   0   -1  |  1⎦
```

**This is Row Echelon Form!**

**Step 4:** Back substitution.
```
From row 3: -x₃ = 1  →  x₃ = -1
From row 2: x₂/2 + (-1)/2 = 1  →  x₂ = 3
From row 1: 2x₁ + 3 - (-1) = 8  →  x₁ = 2

Solution: x = [2, 3, -1]ᵀ
```

**Verify:** 2(2)+3-(-1) = 8 ✓, -3(2)-3+2(-1) = -11 ✓, -2(2)+3+2(-1) = -3 ✓

---

## 4. Gauss-Jordan Elimination (Reduced Row Echelon Form)

Continue beyond row echelon form to **reduced row echelon form (RREF)**:
- Each pivot = 1
- All entries **above** and below each pivot = 0

### Example (continued from above):
```
Starting from:
⎡ 2   1   -1  |  8⎤
⎢ 0  1/2  1/2 |  1⎥
⎣ 0   0   -1  |  1⎦

R₃ → -R₃:
⎡ 2   1   -1  |  8⎤
⎢ 0  1/2  1/2 |  1⎥
⎣ 0   0    1  | -1⎦

R₂ → R₂ - (1/2)R₃:
⎡ 2   1   -1  |  8⎤
⎢ 0  1/2   0  |  3/2⎥
⎣ 0   0    1  | -1⎦

R₁ → R₁ + R₃:
⎡ 2   1    0  |  7⎤
⎢ 0  1/2   0  |  3/2⎥
⎣ 0   0    1  | -1⎦

R₂ → 2R₂:
⎡ 2   1   0  |  7⎤
⎢ 0   1   0  |  3⎥
⎣ 0   0   1  | -1⎦

R₁ → R₁ - R₂:
⎡ 2   0   0  |  4⎤
⎢ 0   1   0  |  3⎥
⎣ 0   0   1  | -1⎦

R₁ → R₁/2:
⎡ 1   0   0  |  2⎤
⎢ 0   1   0  |  3⎥
⎣ 0   0   1  | -1⎦

Solution directly visible: x₁=2, x₂=3, x₃=-1
```

---

## 5. Systems with Infinitely Many Solutions

### Example (Underdetermined)
```
x₁ + 2x₂ + 3x₃ = 9
2x₁ + 4x₂ + 6x₃ = 18

Row reduce:
⎡1  2  3 | 9⎤  →  ⎡1  2  3 | 9⎤
⎣2  4  6 | 18⎦     ⎣0  0  0 | 0⎦   (R₂ = 2R₁)

rank(A) = rank([A|b]) = 1 < n = 3 → infinitely many solutions

Free variables: x₂, x₃ (no pivot in columns 2 and 3)
Basic variable: x₁ = 9 - 2x₂ - 3x₃

General solution:
x = [9, 0, 0]ᵀ + x₂[-2, 1, 0]ᵀ + x₃[-3, 0, 1]ᵀ
    ↑            ↑                   ↑
 particular   null space basis vectors
 solution
```

This shows: **General solution = particular solution + null space**.

---

## 6. LU Decomposition

### Definition
Factor A = LU where:
- L = lower triangular with 1s on diagonal
- U = upper triangular

### Why Use LU?
```
To solve Ax = b → LUx = b

Step 1: Solve Ly = b  (forward substitution, easy — L is lower triangular)
Step 2: Solve Ux = y  (backward substitution, easy — U is upper triangular)

If we need to solve for multiple b vectors (common in ML!),
we factor A = LU once (O(n³)) then solve for each b in O(n²).
```

### Example
```
A = ⎡2  1⎤ = L · U = ⎡1    0⎤ · ⎡2  1  ⎤
    ⎣6  4⎦            ⎣3    1⎦   ⎣0  1  ⎦

Verify: LU = ⎡1·2+0·0  1·1+0·1⎤ = ⎡2  1⎤ = A ✓
             ⎣3·2+1·0  3·1+1·1⎦   ⎣6  4⎦
```

### LU with Partial Pivoting (PLU)
In practice, swap rows to keep numerical stability:
```
PA = LU    (P is a permutation matrix)
```

---

## 7. Connection to ML

### Batch Normalization — Solving for Statistics
At each training step, batch norm solves for:
```
μ_B = (1/m) Σᵢ xᵢ
σ²_B = (1/m) Σᵢ (xᵢ - μ_B)²
```
These are not "solving Ax=b," but they are the analytical solutions to minimizing variance.

### Kernel Methods — Solving (K + λI)α = y
Support Vector Regression and Gaussian Processes solve:
```
(K + λI)α = y

K is the n×n kernel matrix (Gram matrix)
α = (K + λI)⁻¹y    (uses linear system solver!)
```

### Normal Equations in Deep Learning
Sometimes used as an initialization or final layer closed-form solution:
```
w = (XᵀX)⁻¹Xᵀy    (linear readout head with closed-form solution)
```

---

## 8. Practice Problems

### Problem 1 — Classify the System
For each system, determine: unique solution / no solution / infinitely many?
```
a) 2x + 3y = 5         b) x + 2y = 3       c) x + y + z = 6
   4x + 6y = 10            3x + 6y = 9          2x + y - z = 1
                                                 x + 2y + 2z = 8
```

### Problem 2 — Gaussian Elimination
Solve by row reduction:
```
x + 2y + z = 3
2x + y - z = 2
x - y + 2z = 1
```

### Problem 3 — RREF and Free Variables
Row-reduce to RREF and express the general solution:
```
⎡1  2  0  -1⎤   ⎡ 3⎤
⎢2  4  1   0⎥ x=⎢ 6⎥
⎣0  0  2   2⎦   ⎣ 4⎦
```

### Problem 4 — Normal Equations
For linear regression with 3 samples:
```
X = ⎡1  1⎤    y = ⎡2⎤
    ⎢1  2⎥        ⎢4⎥
    ⎣1  3⎦        ⎣5⎦
```
- a) Compute XᵀX (2×2 matrix)
- b) Compute Xᵀy (2×1 vector)
- c) Solve (XᵀX)w = Xᵀy for w = [w₀, w₁]ᵀ

### Problem 5 — LU Decomposition
Factor A = LU for:
```
A = ⎡1  2  1⎤
    ⎢2  5  3⎥
    ⎣1  4  5⎦
```
Then solve Ax = [4, 9, 8]ᵀ using LU.

---

## Key Takeaways

✅ Ax = b has **unique / ∞ / no** solutions based on rank(A) vs rank([A|b]).
✅ **Gaussian elimination** transforms the augmented matrix to row echelon form via elementary row operations.
✅ **RREF** gives the solution directly without back-substitution.
✅ **General solution = particular solution + null space** for underdetermined systems.
✅ **LU decomposition** factorizes A once for efficient repeated solving (critical in ML).
✅ **Normal equations** (XᵀX)w = Xᵀy give the closed-form linear regression solution.
✅ Kernel method training = solving an n×n linear system (K+λI)α = y.

---

*Next: [11 — Linear Transformations](11_Linear_Transformations.md)*