# 03 — Vector Spaces and Subspaces

## 1. Vector Space — Definition

### Formal Definition
A **vector space** (or linear space) V over the real numbers ℝ is a set of objects (vectors) together with two operations (addition and scalar multiplication) that satisfy **10 axioms**.

### The 10 Axioms
For all **u**, **v**, **w** ∈ V and all scalars α, β ∈ ℝ:

| # | Axiom | Meaning |
|---|-------|---------|
| 1 | u + v ∈ V | **Closure under addition** |
| 2 | u + v = v + u | Commutativity |
| 3 | (u+v)+w = u+(v+w) | Associativity |
| 4 | ∃ **0** ∈ V: v + **0** = v | **Zero vector exists** |
| 5 | ∃ -v: v + (-v) = **0** | **Additive inverse** |
| 6 | αv ∈ V | **Closure under scalar mult** |
| 7 | α(u+v) = αu + αv | Distributivity |
| 8 | (α+β)v = αv + βv | Distributivity |
| 9 | α(βv) = (αβ)v | Associativity of scalar mult |
| 10 | 1·v = v | Identity scalar |

### Intuition
A vector space is a "universe" where:
1. You can add any two vectors and stay in the universe
2. You can scale any vector and stay in the universe
3. There's always a zero vector
4. Every vector has an opposite

### Most Important Axioms for ML
The most critical are **closure** (axioms 1 and 6) — they guarantee that operations on data keep you in the same mathematical space.

---

## 2. Common Vector Spaces

### ℝⁿ — The Standard Vector Space
```
ℝ¹ = number line           {all real numbers}
ℝ² = 2D plane              {(x,y) : x,y ∈ ℝ}
ℝ³ = 3D space              {(x,y,z) : x,y,z ∈ ℝ}
ℝⁿ = n-dimensional space   {(x₁,...,xₙ) : xᵢ ∈ ℝ}
```

### Space of Polynomials
```
P₂ = {a₀ + a₁x + a₂x² : a₀, a₁, a₂ ∈ ℝ}
```
This is a vector space of dimension 3.

### Space of m×n Matrices
```
ℝᵐˣⁿ = {all m×n real matrices}
```
Adding two matrices and scaling a matrix keeps you in the same space.

### Function Spaces
```
C[a,b] = {continuous functions f: [a,b] → ℝ}
```
Neural networks learn functions in these infinite-dimensional spaces!

---

## 3. Subspaces

### Definition
A **subspace** W of V is a **subset** of V that is itself a vector space (satisfies closure).

### Three Conditions to Check (Subspace Test)
For W to be a subspace of V:
1. **Zero vector**: **0** ∈ W
2. **Closed under addition**: u, v ∈ W → u + v ∈ W
3. **Closed under scalar multiplication**: v ∈ W, α ∈ ℝ → αv ∈ W

### Example 1: Line through origin
```
W = {[x, y]ᵀ : y = 2x}   (all points on line y=2x)

Check:
1. [0,0]ᵀ: y = 2(0) = 0 ✓ (zero vector is in W)
2. [1,2]ᵀ + [3,6]ᵀ = [4,8]ᵀ: 8 = 2(4) ✓ (closed under addition)
3. 3·[1,2]ᵀ = [3,6]ᵀ: 6 = 2(3) ✓ (closed under scaling)

W IS a subspace of ℝ²
```

### Example 2: Points not through origin (NOT a subspace)
```
W = {[x, y]ᵀ : y = 2x + 1}  (line NOT through origin)

Check:
1. [0,0]ᵀ: 0 ≠ 2(0)+1 = 1 ✗ (zero vector NOT in W)

W is NOT a subspace
```

---

## 4. The Four Fundamental Subspaces of a Matrix

For matrix **A** ∈ ℝᵐˣⁿ, there are 4 fundamental subspaces:

```
                    A ∈ ℝᵐˣⁿ
                   /          \
         Input space            Output space
         (ℝⁿ)                  (ℝᵐ)
        /        \            /        \
   Row space    Null space  Column   Left null
   C(Aᵀ)         N(A)      space    space
   dim=r         dim=n-r    C(A)     N(Aᵀ)
                            dim=r    dim=m-r
```

### Column Space (Range) — C(A)
```
C(A) = {Ax : x ∈ ℝⁿ}  (all possible outputs of A)

C(A) is a subspace of ℝᵐ
```

**Intuition**: All possible linear combinations of A's columns.

**Example:**
```
A = ⎡1 2⎤
    ⎢3 4⎥
    ⎣5 6⎦

Column 1: [1,3,5]ᵀ
Column 2: [2,4,6]ᵀ = 2·[1,2,3]ᵀ  (linearly dependent!)

C(A) = span{[1,3,5]ᵀ} — a line in ℝ³
dim(C(A)) = 1... wait, let's check: [2,4,6]ᵀ ≠ c·[1,3,5]ᵀ for any c
Actually dim(C(A)) = 2 (both columns are independent)
```

### Null Space (Kernel) — N(A)
```
N(A) = {x : Ax = 0}  (all vectors that A sends to zero)

N(A) is a subspace of ℝⁿ
```

**Intuition**: The "blind spots" of matrix A — inputs that produce zero output.

**Example:**
```
A = [1 2 3]  (1×3 matrix)

Find all x such that Ax = 0:
x₁ + 2x₂ + 3x₃ = 0
→ x₁ = -2x₂ - 3x₃

Free variables: x₂, x₃

x = x₂[-2,1,0]ᵀ + x₃[-3,0,1]ᵀ

N(A) = span{[-2,1,0]ᵀ, [-3,0,1]ᵀ}  (a 2D plane in ℝ³)
```

### Row Space — C(Aᵀ)
The column space of Aᵀ = span of A's rows.

### Left Null Space — N(Aᵀ)
All y such that Aᵀy = 0 (or equivalently yᵀA = 0).

### Rank-Nullity Theorem
```
dim(C(A)) + dim(N(A)) = n    (number of columns)
        r         +    (n-r)   = n

Where r = rank(A) = dim(C(A)) = dim(C(Aᵀ))
```

---

## 5. Span

### Definition
The **span** of a set of vectors {v₁, v₂, ..., vₖ} is the set of ALL possible linear combinations:
```
span{v₁, ..., vₖ} = {c₁v₁ + c₂v₂ + ... + cₖvₖ : c₁,...,cₖ ∈ ℝ}
```

### Examples

**Span of one vector in ℝ²:**
```
span{[1,2]ᵀ} = {t·[1,2]ᵀ : t ∈ ℝ} = line through origin with slope 2
```

**Span of two independent vectors in ℝ²:**
```
span{[1,0]ᵀ, [0,1]ᵀ} = ℝ²   (entire 2D plane)
```

**Span of two dependent vectors in ℝ²:**
```
span{[1,2]ᵀ, [2,4]ᵀ} = span{[1,2]ᵀ} = line
(second vector = 2 × first vector, so no new directions added)
```

### Usage in AI/ML
- **Column space of weight matrix**: determines what outputs a layer can produce
- **Feature span**: determines what patterns a model can represent
- If your data lies in a low-dimensional subspace, **PCA** finds that subspace

---

## 6. Dimension of a Vector Space

### Definition
The **dimension** of a vector space V is the number of vectors in any **basis** of V.

```
dim(ℝⁿ) = n
dim(ℝᵐˣⁿ) = m·n
dim(P_d) = d+1   (polynomials of degree ≤ d)
```

### Dimension and ML Feature Spaces
- Input data in ℝ¹⁰⁰⁰ lives in 1000-dimensional space
- But **real data often lies on a low-dimensional manifold** — this is why dimensionality reduction works!
- Neural networks implicitly learn this lower-dimensional structure

---

## 7. Affine Subspaces

### Definition
An **affine subspace** is a translation of a linear subspace:
```
W + v₀ = {w + v₀ : w ∈ W}
```
It does NOT pass through the origin (unless v₀ = 0).

### Example
```
W = {[x,y]ᵀ : y = 0}   (x-axis, a subspace)
W + [0,3]ᵀ = {[x,y]ᵀ : y = 3}  (line y=3, an affine subspace)
```

### Usage in AI/ML
- Neural network decision boundaries are **affine hyperplanes**: wᵀx + b = 0
- The bias term b "shifts" the boundary off the origin
- Affine transformations: y = Ax + b (linear + translation)

---

## 8. Hyperplanes

### Definition
A **hyperplane** in ℝⁿ is an (n-1)-dimensional affine subspace:
```
H = {x ∈ ℝⁿ : wᵀx = c}

where w ∈ ℝⁿ is the normal vector and c ∈ ℝ is a constant
```

### Examples
- In ℝ² (2D): a hyperplane is a **line**
- In ℝ³ (3D): a hyperplane is a **plane**
- In ℝ¹⁰⁰⁰ (high-dim): a hyperplane is a 999-dimensional surface

### Visual (2D hyperplane = line)
```
y
↑      wᵀx = c  (separating hyperplane)
│ ●●     /  ○○
│  ●●  /   ○○
│   ●● /  ○○
└──────────→ x
  Class -1  Class +1
```

### Usage in AI/ML
- **Linear classifiers**: predict class based on which side of hyperplane x is on
- **SVM**: find the **maximum margin hyperplane** between classes
- **Neural network layers**: each neuron defines a hyperplane; activation function checks which side

---

## Practice Problems

### Problem 1 — Subspace Test
Which of the following are subspaces of ℝ²?
- a) W = {[x,y]ᵀ : x + y = 0}
- b) W = {[x,y]ᵀ : x + y = 1}
- c) W = {[x,y]ᵀ : xy = 0} (x-axis OR y-axis)
- d) W = {[x,y]ᵀ : x ≥ 0}

### Problem 2 — Null Space
Find the null space of:
```
A = ⎡1  2  3⎤
    ⎣4  5  6⎦
```

### Problem 3 — Column Space
```
A = ⎡1  0  2⎤
    ⎣0  1  3⎦
```
- a) What is dim(C(A))?
- b) What is dim(N(A))?
- c) Verify the rank-nullity theorem.

### Problem 4 — Span
In ℝ³, what does span{[1,0,0]ᵀ, [0,1,0]ᵀ, [1,1,0]ᵀ} equal? (Be careful — are these independent?)

### Problem 5 — ML Application
A neural network maps ℝ¹⁰⁰⁰ input → ℝ² output (2-class classification).
- a) What is the input space?
- b) What is the output space?
- c) What type of boundary separates the two classes in ℝ¹⁰⁰⁰?

---

## Key Takeaways

✅ A **vector space** is a mathematical universe closed under addition and scalar multiplication.
✅ A **subspace** is a subset that is itself a vector space — always passes through the origin.
✅ The **four fundamental subspaces** of a matrix reveal the geometry of linear transformations.
✅ The **column space** of the weight matrix determines what outputs a neural network layer can produce.
✅ The **null space** reveals redundancy and degenerate directions.
✅ Real ML data often lives in a **low-dimensional subspace** of a high-dimensional space — the key insight behind PCA and autoencoders.
✅ Neural network decision boundaries are **hyperplanes** — linear classifiers literally slice the feature space.

---

*Next: [04 — Linear Independence and Basis](04_Linear_Independence_and_Basis.md)*