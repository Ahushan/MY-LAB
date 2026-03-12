# 05 — Matrices and Types

---

## 1. Matrix Definition and Notation

### Definition
A **matrix** A ∈ ℝᵐˣⁿ is a rectangular array of real numbers with m rows and n columns.

```
         col 1  col 2  col 3
row 1  ⎡  a₁₁   a₁₂   a₁₃ ⎤
row 2  ⎢  a₂₁   a₂₂   a₂₃ ⎥
row 3  ⎣  a₃₁   a₃₂   a₃₃ ⎦
```

- **Element notation**: Aᵢⱼ = element at row i, column j
- **Shape**: (m, n) or m×n
- **Square matrix**: m = n

---

## 2. Special Matrix Types

### 2.1 Zero Matrix (Null Matrix)
```
0 = ⎡0 0 0⎤
    ⎢0 0 0⎥
    ⎣0 0 0⎦

All entries are zero. Additive identity: A + 0 = A
```
**ML Use**: Initializing weight matrices (though not recommended — breaks symmetry).

### 2.2 Identity Matrix
```
I_n = ⎡1 0 0⎤
      ⎢0 1 0⎥
      ⎣0 0 1⎦

Iᵢⱼ = 1 if i=j, else 0     (Kronecker delta)

Property: AI = IA = A   (multiplicative identity)
```
**ML Use**: Skip connections (ResNets), identity mappings, initialization reference.

### 2.3 Diagonal Matrix
```
D = ⎡d₁  0   0 ⎤
    ⎢ 0  d₂  0 ⎥
    ⎣ 0   0  d₃⎦

Notation: D = diag(d₁, d₂, d₃)
```
**Properties:**
- D⁻¹ = diag(1/d₁, 1/d₂, 1/d₃) — trivial to invert!
- Dᵏ = diag(d₁ᵏ, d₂ᵏ, d₃ᵏ) — trivial to exponentiate

**ML Use**: In SVD (Σ is diagonal); covariance matrix of independent features; learning rate matrices in adaptive optimizers.

### 2.4 Transpose
```
If A ∈ ℝᵐˣⁿ, then Aᵀ ∈ ℝⁿˣᵐ

(Aᵀ)ᵢⱼ = Aⱼᵢ   (rows become columns)

Example:
A = ⎡1 2 3⎤         Aᵀ = ⎡1 4⎤
    ⎣4 5 6⎦              ⎢2 5⎥
                          ⎣3 6⎦
```

**Transpose Properties:**
```
(Aᵀ)ᵀ = A
(A + B)ᵀ = Aᵀ + Bᵀ
(AB)ᵀ = BᵀAᵀ    ← NOTE: order reverses!
(αA)ᵀ = αAᵀ
```
**ML Use**: Backpropagation uses transpose — gradient flows through Wᵀ.

### 2.5 Symmetric Matrix
```
A is symmetric if A = Aᵀ  (i.e., Aᵢⱼ = Aⱼᵢ)

Example:
A = ⎡1  2  3⎤
    ⎢2  5  4⎥    (mirror symmetry across diagonal)
    ⎣3  4  6⎦
```

**Properties:**
- All eigenvalues are **real**
- Eigenvectors for distinct eigenvalues are **orthogonal**
- Can be diagonalized as A = QΛQᵀ

**ML Use**: **Covariance matrices** are always symmetric; **Gram matrices** (K = XᵀX) are symmetric; Hessian matrices are symmetric (under mild conditions).

### 2.6 Skew-Symmetric (Anti-Symmetric) Matrix
```
A is skew-symmetric if A = -Aᵀ  (i.e., Aᵢⱼ = -Aⱼᵢ)

Example:
A = ⎡ 0   2  -3⎤
    ⎢-2   0   4⎥
    ⎣ 3  -4   0⎦

Diagonal elements must be 0!
```

**ML Use**: Rotations in geometric deep learning; Lie algebras for continuous symmetry groups.

### 2.7 Orthogonal Matrix
```
A matrix Q is orthogonal if:
QᵀQ = QQᵀ = I   (equivalently, Q⁻¹ = Qᵀ)

Columns (and rows) form an orthonormal set.
```

**Properties:**
- ‖Qx‖ = ‖x‖ for all x — **preserves length**
- det(Q) = ±1
- Represents **rotations** (det=1) or **reflections** (det=-1)

**Example** (90° rotation):
```
Q = ⎡0  -1⎤
    ⎣1   0⎦

Qᵀ = ⎡ 0  1⎤
     ⎣-1  0⎦

QQᵀ = ⎡0 -1⎤⎡ 0  1⎤ = ⎡1 0⎤ = I ✓
      ⎣1  0⎦⎣-1  0⎦   ⎣0 1⎦
```

**ML Use**: **QR decomposition** produces orthogonal Q; weight initialization methods (orthogonal initialization); normalization layers relate to rotation.

### 2.8 Positive Definite (PD) Matrix
```
A symmetric matrix A is positive definite if:
xᵀAx > 0 for all non-zero x

Equivalently: all eigenvalues > 0
```

**Positive Semi-Definite (PSD):**
```
xᵀAx ≥ 0 for all x     (eigenvalues ≥ 0)
```

**Example** (positive definite):
```
A = ⎡2 1⎤
    ⎣1 2⎦

xᵀAx = 2x₁² + 2x₁x₂ + 2x₂² = (x₁+x₂)² + x₁² + x₂² > 0  for x≠0

Eigenvalues: λ₁=3, λ₂=1  (both positive ✓)
```

**ML Use**: **Covariance matrices** are PSD; **Hessians** of convex losses are PD; kernel matrices must be PSD; **Cholesky decomposition** requires PD.

### 2.9 Triangular Matrices
**Upper Triangular:**
```
U = ⎡u₁₁  u₁₂  u₁₃⎤
    ⎢  0  u₂₂  u₂₃⎥   (all entries below diagonal = 0)
    ⎣  0    0  u₃₃⎦
```

**Lower Triangular:**
```
L = ⎡l₁₁   0    0 ⎤
    ⎢l₂₁  l₂₂   0 ⎥   (all entries above diagonal = 0)
    ⎣l₃₁  l₃₂  l₃₃⎦
```

**ML Use**: **LU decomposition** (L and U matrices); solving linear systems efficiently; **Cholesky decomposition** (A = LLᵀ).

### 2.10 Sparse Matrix
```
A matrix with mostly zero entries.

Example (5×5 sparse):
⎡1  0  0  0  0⎤
⎢0  0  3  0  0⎥
⎢0  0  0  0  0⎥
⎢2  0  0  4  0⎥
⎣0  0  0  0  5⎦

Only 5 non-zero entries out of 25.
```

**Storage formats:** CSR (Compressed Sparse Row), CSC, COO — store only non-zeros.

**ML Use**: Adjacency matrices in GNNs; sparse attention; TF-IDF representations of text; sparse weight matrices in pruned networks.

### 2.11 Idempotent Matrix
```
A matrix P is idempotent if: P² = P

Key example: Projection matrices
P = A(AᵀA)⁻¹Aᵀ   (projection onto column space of A)
P² = P ✓
```

**ML Use**: Projection in linear regression; attention maps have idempotent-like properties.

### 2.12 Stochastic Matrix (Transition Matrix)
```
A matrix where each column (or row) sums to 1
and all entries are non-negative (probabilities).

Example:
P = ⎡0.7  0.3⎤
    ⎣0.4  0.6⎦

Column sums: 0.7+0.4=1.1... 
Actually: row-stochastic means rows sum to 1.

P = ⎡0.7  0.3⎤
    ⎣0.4  0.6⎦
rows: 0.7+0.3=1, 0.4+0.6=1 ✓
```

**ML Use**: **Markov chains**; transition matrices in RL; attention weight matrices (each row sums to 1 via softmax!).

### 2.13 Block Matrix
```
A = ⎡A₁₁  A₁₂⎤
    ⎣A₂₁  A₂₂⎦

where each Aᵢⱼ is itself a matrix.
```

**ML Use**: Efficient parallel computation; multi-head attention produces block-structured matrices; distributed training.

### 2.14 Toeplitz Matrix
```
T = ⎡a  b  c  d⎤
    ⎢e  a  b  c⎥   (each diagonal has constant value)
    ⎢f  e  a  b⎥
    ⎣g  f  e  a⎦
```

**ML Use**: Convolutional layers are related to Toeplitz matrices — the convolution operation has this constant-diagonal structure; efficient implementations exploit this.

### 2.15 Gram Matrix (Kernel Matrix)
```
Given data matrix X ∈ ℝⁿˣᵈ:
G = XᵀX ∈ ℝᵈˣᵈ   (feature correlations)
or
K = XXᵀ ∈ ℝⁿˣⁿ   (sample similarities)

K is always PSD (positive semi-definite)
```

**ML Use**: **SVMs** use kernel matrices; **NTK** (Neural Tangent Kernel) describes infinite-width neural networks; **Ridge regression** solution involves Gram matrix.

---

## 3. Matrix Terminology Reference

| Term | Definition | ML Example |
|------|-----------|------------|
| Square | m = n | Weight matrices in square layers |
| Rectangular | m ≠ n | Input layer weight matrices |
| Invertible/Nonsingular | A⁻¹ exists, det(A) ≠ 0, rank = n | Solving systems |
| Singular | No inverse, det(A) = 0, rank < n | Degenerate cases |
| Rank-deficient | rank(A) < min(m,n) | Underfitted models |
| Full rank | rank(A) = min(m,n) | Well-determined systems |
| Normal | AAᵀ = AᵀA | Includes symmetric, orthogonal |

---

## 4. Matrix Trace

### Definition
The **trace** of a square matrix is the sum of diagonal elements:
```
tr(A) = Σᵢ Aᵢᵢ = A₁₁ + A₂₂ + ... + Aₙₙ
```

### Example
```
A = ⎡1 2⎤
    ⎣3 4⎦

tr(A) = 1 + 4 = 5
```

### Trace Properties
```
tr(A + B) = tr(A) + tr(B)
tr(αA) = α·tr(A)
tr(AB) = tr(BA)      ← trace is cyclic!
tr(Aᵀ) = tr(A)
tr(A) = Σᵢ λᵢ        (sum of eigenvalues)
```

### Usage in AI/ML
- **Frobenius norm**: ‖A‖²_F = tr(AᵀA) = Σᵢⱼ Aᵢⱼ²
- Regularization: sometimes penalize tr(WᵀW)
- Backpropagation derivations involve trace identities
- Nuclear norm: Σᵢ σᵢ = tr(√(AᵀA))

---

## Practice Problems

### Problem 1 — Matrix Classification
Classify each matrix as many types as apply (symmetric, diagonal, orthogonal, PD, etc.):
```
a) A = ⎡1 0⎤      b) B = ⎡3  1⎤      c) C = ⎡ 0  1⎤
       ⎣0 1⎦             ⎣1  3⎦             ⎣-1  0⎦
```

### Problem 2 — Transpose Properties
Given A = [[1,2],[3,4]] and B = [[5,6],[7,8]]:
- a) Compute (AB)ᵀ
- b) Compute BᵀAᵀ
- c) Verify (AB)ᵀ = BᵀAᵀ

### Problem 3 — Positive Definiteness
Test if A = [[4, 2], [2, 3]] is positive definite by:
- a) Computing eigenvalues
- b) Testing xᵀAx with x = [1,1]ᵀ and x = [1,-2]ᵀ

### Problem 4 — Trace
Compute the trace of:
```
A = ⎡2  5  1⎤
    ⎢3  4  7⎥
    ⎣9  1  6⎦
```
Then verify: tr(AᵀA) = Σᵢⱼ Aᵢⱼ²

### Problem 5 — ML Connection
A softmax attention weight matrix W ∈ ℝⁿˣⁿ (n = sequence length, Wᵢⱼ = attention from token i to token j):
- a) What property must W have? (hint: each row sums to 1)
- b) Is W symmetric? When would it be?
- c) What type of matrix is W? (stochastic, PSD, etc.)

---

## Key Takeaways

✅ **Identity matrix**: the "1" of matrix world — fundamental reference.
✅ **Symmetric matrices**: always have real eigenvalues and orthogonal eigenvectors — critical for PCA, covariance.
✅ **Orthogonal matrices**: preserve geometry — rotations and reflections.
✅ **Positive definite matrices**: arise everywhere — covariance, Hessian, kernels.
✅ **Diagonal matrices**: trivial to invert and exponentiate — appear in SVD's Σ.
✅ **Sparse matrices**: essential for efficiency — graph adjacency, pruned networks.
✅ **Gram matrix** K = XXᵀ is the heart of kernel methods and NTK theory.
✅ The **transpose rule** (AB)ᵀ = BᵀAᵀ is one of the most-used identities in backpropagation.

---

*Next: [06 — Matrix Operations](06_Matrix_Operations.md)*