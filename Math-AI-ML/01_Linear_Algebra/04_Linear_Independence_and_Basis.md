# 04 — Linear Independence and Basis

---

## 1. Linear Independence

### Definition
A set of vectors {v₁, v₂, ..., vₖ} is **linearly independent** if the **only** solution to:
```
c₁v₁ + c₂v₂ + ... + cₖvₖ = 0
```
is the **trivial solution**: c₁ = c₂ = ... = cₖ = 0.

If a **non-trivial** solution exists (some cᵢ ≠ 0), the vectors are **linearly dependent**.

### Intuition
- **Independent**: no vector can be expressed as a combination of the others — each adds a new direction.
- **Dependent**: at least one vector is "redundant" — it's already captured by the others.

### Visual Explanation

**Independent (2D):**
```
v₂ ↗
   /
  /   These span the entire 2D plane
──→ v₁
```

**Dependent (2D):**
```
Both arrows point along the same line —
v₂ = 2·v₁ (v₂ is redundant)

──→ v₁
────────→ v₂
```

---

## 2. Checking Linear Independence

### Method 1: By Definition
Solve c₁v₁ + c₂v₂ + ... = 0 and check if only trivial solution exists.

### Example 1 — Independent
```
v₁ = [1, 0]ᵀ,  v₂ = [0, 1]ᵀ

c₁[1,0]ᵀ + c₂[0,1]ᵀ = [0,0]ᵀ
[c₁, c₂]ᵀ = [0,0]ᵀ
→ c₁ = 0, c₂ = 0  (only trivial solution)

LINEARLY INDEPENDENT ✓
```

### Example 2 — Dependent
```
v₁ = [1, 2]ᵀ,  v₂ = [2, 4]ᵀ,  v₃ = [3, 6]ᵀ

Note: v₂ = 2v₁  and  v₃ = 3v₁

c₁[1,2]ᵀ + c₂[2,4]ᵀ + c₃[3,6]ᵀ = [0,0]ᵀ

Many solutions: c₁=2, c₂=-1, c₃=0 works: 2[1,2]-1[2,4]+0[3,6] = [0,0] ✓

LINEARLY DEPENDENT ✗ (redundant vectors)
```

### Method 2: Matrix Rank
Arrange vectors as columns of matrix A, then:
```
Vectors are linearly independent ↔ rank(A) = k  (k = number of vectors)
Vectors are linearly dependent   ↔ rank(A) < k
```

### Method 3: Determinant (Square Matrices Only)
```
For n vectors in ℝⁿ: det(A) ≠ 0 ↔ columns are linearly independent
```

---

## 3. Basis

### Definition
A **basis** for a vector space V is a set of vectors B = {b₁, b₂, ..., bₙ} that is:
1. **Linearly independent** — no redundancy
2. **Spans V** — can express every vector in V as a linear combination

### Key Property
Every vector in V has a **unique** representation in any given basis:
```
v = c₁b₁ + c₂b₂ + ... + cₙbₙ   (unique coefficients c₁,...,cₙ)
```

The coordinates [c₁, c₂, ..., cₙ] are the **coordinates of v in basis B**.

---

## 4. Standard Basis (Canonical Basis)

### Definition
The **standard basis** for ℝⁿ consists of the unit vectors:
```
e₁ = [1,0,0,...,0]ᵀ
e₂ = [0,1,0,...,0]ᵀ
     ⋮
eₙ = [0,0,0,...,1]ᵀ
```

### Example: Standard Basis for ℝ³
```
e₁ = [1,0,0]ᵀ  (x-direction)
e₂ = [0,1,0]ᵀ  (y-direction)
e₃ = [0,0,1]ᵀ  (z-direction)

Any vector [3,5,7]ᵀ = 3e₁ + 5e₂ + 7e₃
```

---

## 5. Change of Basis

### Concept
The **same vector** can be described with **different coordinates** depending on which basis you use.

### Example
```
Standard basis: e₁ = [1,0]ᵀ,  e₂ = [0,1]ᵀ

New basis: b₁ = [1,1]ᵀ/√2,  b₂ = [1,-1]ᵀ/√2  (rotated 45°)

Vector v = [1,0]ᵀ in standard basis
         = ?  in new basis

Coordinates in new basis:
c₁ = v·b₁ = [1,0]·[1,1]/√2 = 1/√2
c₂ = v·b₂ = [1,0]·[1,-1]/√2 = 1/√2

v = (1/√2)b₁ + (1/√2)b₂  (in new basis)
```

### Change of Basis Matrix
If old basis vectors form columns of matrix P:
```
v_old = P · v_new      (coordinates in old basis from new basis)
v_new = P⁻¹ · v_old   (coordinates in new basis from old basis)
```

### Usage in AI/ML
- **PCA**: changes basis to the eigenvector basis (principal components)
- **Fourier transforms**: changes basis to frequency basis
- **Autoencoders**: learn a new basis (latent space)
- **Attention in Transformers**: projects to Query/Key/Value bases

---

## 6. Dimension

### Definition
The **dimension** of a vector space = number of vectors in any basis.

This is well-defined because **all bases for V have the same number of vectors**.

```
dim(ℝⁿ) = n
dim(W) = r  where W is a subspace with basis of r vectors
```

### Intuition
Dimension = **degrees of freedom** in the space.
- ℝ² has 2 degrees of freedom (x, y)
- ℝ³ has 3 degrees of freedom (x, y, z)
- A line through origin in ℝ³ has dimension 1 (only 1 degree of freedom)

---

## 7. Orthogonal and Orthonormal Bases

### Orthogonal Basis
A basis where all vectors are **mutually perpendicular** (dot product = 0):
```
bᵢ · bⱼ = 0  for all i ≠ j
```

### Orthonormal Basis (ONB)
An orthogonal basis where all vectors are **unit vectors**:
```
bᵢ · bⱼ = δᵢⱼ = {1 if i=j, 0 if i≠j}

(δᵢⱼ is the Kronecker delta)
```

### Why Orthonormal Bases are Special
1. **Computing coordinates is trivial**: cᵢ = v · bᵢ (just dot products!)
2. **Change of basis matrix is orthogonal**: P⁻¹ = Pᵀ (very fast to invert)
3. **Preserves lengths and angles** (isometry)
4. **Numerically stable** in computations

### Standard Basis is Orthonormal
```
e₁·e₂ = [1,0]·[0,1] = 0  (orthogonal)
‖e₁‖ = 1, ‖e₂‖ = 1       (unit vectors)
```

---

## 8. Gram-Schmidt Orthogonalization

### Purpose
Convert any set of linearly independent vectors into an **orthonormal basis**.

### Algorithm
Given independent vectors {v₁, v₂, ..., vₖ}:

**Step 1:** u₁ = v₁,  e₁ = u₁/‖u₁‖

**Step 2:** u₂ = v₂ − (v₂·e₁)e₁,  e₂ = u₂/‖u₂‖
(Remove the component of v₂ that lies along e₁)

**Step 3:** u₃ = v₃ − (v₃·e₁)e₁ − (v₃·e₂)e₂,  e₃ = u₃/‖u₃‖

**General:**
```
uₖ = vₖ − Σⱼ₌₁ᵏ⁻¹ (vₖ·eⱼ)eⱼ
eₖ = uₖ / ‖uₖ‖
```

### Numerical Example

**Input:** v₁ = [1,1,0]ᵀ, v₂ = [1,0,1]ᵀ, v₃ = [0,1,1]ᵀ

**Step 1:**
```
u₁ = [1,1,0]ᵀ
‖u₁‖ = √2
e₁ = [1/√2, 1/√2, 0]ᵀ
```

**Step 2:**
```
v₂·e₁ = [1,0,1]·[1/√2,1/√2,0] = 1/√2

u₂ = [1,0,1]ᵀ − (1/√2)·[1/√2,1/√2,0]ᵀ
   = [1,0,1]ᵀ − [1/2,1/2,0]ᵀ
   = [1/2, -1/2, 1]ᵀ

‖u₂‖ = √(1/4 + 1/4 + 1) = √(3/2) = √6/2

e₂ = [1/√6, -1/√6, 2/√6]ᵀ
```

**Step 3:** (similar process)

### Usage in AI/ML
- **QR Decomposition** (see file 20_Gram_Schmidt_and_QR)
- Constructing orthogonal feature representations
- **PCA**: eigenvectors form an orthonormal basis
- **Householder transformations** in numerical linear algebra

---

## 9. Rank of a Matrix

### Definition
The **rank** of matrix A = dimension of its column space = dimension of its row space.

```
rank(A) = dim(C(A)) = dim(C(Aᵀ))
```

### Intuition
Rank = number of **truly independent directions** in the matrix.

### Computing Rank via Row Reduction
```
A = ⎡1  2  3⎤
    ⎢2  4  6⎥   Row 2 = 2 × Row 1 (dependent!)
    ⎣1  3  4⎦

After row reduction:
⎡1  2  3⎤
⎢0  0  0⎥   (row 2 eliminated)
⎣0  1  1⎦

2 non-zero rows → rank(A) = 2
```

### Full Rank
- **Full row rank**: rank = m (all rows independent, no redundant rows)
- **Full column rank**: rank = n (all columns independent)
- **Full rank square matrix**: rank = n = m (invertible!)

### Rank and Neural Networks
```
Weight matrix W ∈ ℝᵐˣⁿ:
- If rank(W) < min(m,n): information bottleneck exists
- Low-rank matrices appear in:
  - Attention in Transformers (W_Q, W_K, W_V are often low rank)
  - LoRA (Low-Rank Adaptation) — a parameter-efficient fine-tuning technique
  - Matrix factorization in recommendation systems
```

---

## 10. Overdetermined and Underdetermined Systems

### Overdetermined (more equations than unknowns): m > n
```
Ax = b,  A ∈ ℝᵐˣⁿ with m > n

Usually NO exact solution — use least squares: min‖Ax - b‖²
```
**ML Example**: Linear regression with more samples (m) than features (n) — this is the typical case.

### Underdetermined (more unknowns than equations): m < n
```
Ax = b,  A ∈ ℝᵐˣⁿ with m < n

Infinitely many solutions — pick minimum norm solution
```
**ML Example**: Underdetermined systems arise in compressed sensing and overparameterized neural networks.

---

## Practice Problems

### Problem 1 — Independence Check
Are the following sets linearly independent?
- a) {[1,2]ᵀ, [3,4]ᵀ}
- b) {[1,2,3]ᵀ, [2,4,6]ᵀ}
- c) {[1,0,0]ᵀ, [0,1,0]ᵀ, [0,0,1]ᵀ, [1,1,1]ᵀ}
- d) {[1,1,0]ᵀ, [0,1,1]ᵀ, [1,0,-1]ᵀ}

### Problem 2 — Basis Verification
Is B = {[1,2]ᵀ, [3,4]ᵀ} a basis for ℝ²?
- a) Check linear independence
- b) Check if they span ℝ²
- c) Find the coordinates of v = [5,6]ᵀ in basis B

### Problem 3 — Rank
Find the rank of:
```
A = ⎡1  2  1⎤
    ⎢2  4  2⎥
    ⎣3  6  4⎦
```

### Problem 4 — Gram-Schmidt
Apply Gram-Schmidt to {[1,1]ᵀ, [1,0]ᵀ} to find an orthonormal basis.

### Problem 5 — ML Application (LoRA)
In LoRA (Low-Rank Adaptation), instead of fine-tuning full weight matrix W ∈ ℝᵐˣⁿ, we represent:
```
ΔW = AB  where A ∈ ℝᵐˣʳ, B ∈ ℝʳˣⁿ, r << min(m,n)
```
- a) What is the rank of ΔW?
- b) If m=4096, n=4096, r=8: how many parameters in ΔW? In A+B?
- c) Why does this save memory and computation?

---

## Key Takeaways

✅ **Linear independence** means no vector is redundant — each contributes a new direction.
✅ A **basis** is a minimal spanning set — independent AND spans the whole space.
✅ **Dimension** = number of vectors in any basis = degrees of freedom.
✅ **Orthonormal bases** are computationally ideal — coordinates computed with dot products.
✅ **Gram-Schmidt** converts any independent set to an orthonormal basis (basis of QR decomposition).
✅ **Rank** = number of independent directions — low rank → redundancy/compression.
✅ **LoRA** exploits low-rank structure to fine-tune LLMs with millions fewer parameters.

---

*Next: [05 — Matrices and Types](05_Matrices_and_Types.md)*