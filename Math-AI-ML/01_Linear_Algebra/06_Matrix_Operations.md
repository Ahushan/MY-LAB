# 06 — Matrix Operations

## 1. Matrix Addition and Subtraction

### Definition
Two matrices of the **same shape** (m×n) can be added or subtracted element-wise.

```
(A + B)ᵢⱼ = Aᵢⱼ + Bᵢⱼ
(A - B)ᵢⱼ = Aᵢⱼ - Bᵢⱼ
```

### Example
```
A = ⎡1  2⎤    B = ⎡5  6⎤
    ⎣3  4⎦        ⎣7  8⎦

A + B = ⎡1+5  2+6⎤ = ⎡6   8⎤
        ⎣3+7  4+8⎦   ⎣10  12⎦

A - B = ⎡1-5  2-6⎤ = ⎡-4  -4⎤
        ⎣3-7  4-8⎦   ⎣-4  -4⎦
```

### Properties
```
A + B = B + A                  (commutativity)
(A + B) + C = A + (B + C)      (associativity)
A + 0 = A                      (zero matrix identity)
A + (-A) = 0                   (additive inverse)
```

### Usage in AI/ML
- **Bias addition**: Z = WX + B (adding bias matrix to pre-activation)
- **Residual connections**: output = F(x) + x
- **Gradient accumulation**: G_total = G_batch1 + G_batch2 + ...

---

## 2. Scalar Multiplication

### Definition
Multiplying a matrix by a scalar scales every element.

```
(αA)ᵢⱼ = α · Aᵢⱼ
```

### Example
```
α = 3,   A = ⎡1  -2⎤
             ⎣0   4⎦

αA = ⎡3·1   3·(-2)⎤ = ⎡ 3  -6⎤
     ⎣3·0    3·4  ⎦   ⎣ 0  12⎦
```

### Properties
```
α(A + B) = αA + αB
(α + β)A = αA + βA
(αβ)A = α(βA)
1·A = A
```

### Usage in AI/ML
- **Learning rate scaling**: W ← W - α · ∇W (α scales gradient matrix)
- **Loss scaling**: used in mixed-precision training to prevent underflow

---

## 3. Element-wise (Hadamard) Product

### Definition
Element-wise multiplication of two matrices of **the same shape**:

```
(A ⊙ B)ᵢⱼ = Aᵢⱼ · Bᵢⱼ
```

**Note:** This is NOT the same as matrix multiplication!

### Example
```
A = ⎡1  2⎤    B = ⎡5  6⎤
    ⎣3  4⎦        ⎣7  8⎦

A ⊙ B = ⎡1·5  2·6⎤ = ⎡ 5  12⎤
        ⎣3·7  4·8⎦   ⎣21  32⎦
```

### Usage in AI/ML
- **Backpropagation**: δ^l = ((W^(l+1))ᵀ δ^(l+1)) ⊙ σ'(z^l)
- **Attention masking**: apply mask ⊙ attention scores
- **LSTM gates**: c_t = f_t ⊙ c_{t-1} + i_t ⊙ g_t (element-wise gate operations)
- **Dropout**: multiply activations ⊙ binary mask

---

## 4. Matrix Transpose

### Definition
```
(Aᵀ)ᵢⱼ = Aⱼᵢ     (rows become columns, columns become rows)

If A ∈ ℝᵐˣⁿ, then Aᵀ ∈ ℝⁿˣᵐ
```

### Example
```
A = ⎡1  2  3⎤           Aᵀ = ⎡1  4⎤
    ⎣4  5  6⎦                 ⎢2  5⎥
                              ⎣3  6⎦
A ∈ ℝ²ˣ³                 Aᵀ ∈ ℝ³ˣ²
```

### Key Transpose Rules (Essential for Backprop)
```
(Aᵀ)ᵀ = A
(A + B)ᵀ = Aᵀ + Bᵀ
(αA)ᵀ = αAᵀ
(AB)ᵀ = BᵀAᵀ            ← ORDER REVERSES! Critical!
(ABC)ᵀ = CᵀBᵀAᵀ          ← Reverses for any chain
```

### Transpose Rule Proof for Products
```
Let C = AB. Then Cᵢⱼ = Σₖ AᵢₖBₖⱼ

(Cᵀ)ᵢⱼ = Cⱼᵢ = Σₖ AⱼₖBₖᵢ = Σₖ (Bᵀ)ᵢₖ(Aᵀ)ₖⱼ = (BᵀAᵀ)ᵢⱼ

Therefore (AB)ᵀ = BᵀAᵀ  ✓
```

### Usage in AI/ML
- **Backpropagation**: gradient flows through Wᵀ:
  δ^l = (W^(l+1))ᵀ δ^(l+1)
- **Dot product as matrix operation**: xᵀy = scalar
- **Gram matrix**: XᵀX (feature covariance), XXᵀ (sample kernel)

---

## 5. Trace

### Definition
Sum of diagonal elements of a **square** matrix:
```
tr(A) = Σᵢ Aᵢᵢ = A₁₁ + A₂₂ + ... + Aₙₙ
```

### Example
```
A = ⎡3  1  4⎤
    ⎢1  5  9⎥
    ⎣2  6  5⎦

tr(A) = 3 + 5 + 5 = 13
```

### Trace Properties
```
tr(A + B) = tr(A) + tr(B)
tr(αA)    = α · tr(A)
tr(Aᵀ)   = tr(A)
tr(AB)    = tr(BA)            ← Cyclic property! (even if AB ≠ BA)
tr(ABC)   = tr(BCA) = tr(CAB) ← Cyclic for any number of matrices
tr(A)     = Σᵢ λᵢ             ← Sum of eigenvalues
```

### Cyclic Trace Proof
```
tr(AB) = Σᵢ (AB)ᵢᵢ = Σᵢ Σⱼ AᵢⱼBⱼᵢ
tr(BA) = Σⱼ (BA)ⱼⱼ = Σⱼ Σᵢ BⱼᵢAᵢⱼ

Both equal Σᵢ Σⱼ AᵢⱼBⱼᵢ  ✓
```

### Trace Trick in ML (Gradient Derivations)
```
∂/∂A tr(ABCᵀ) = BᵀCᵀ     (trace derivative — used in matrix calculus)
∂/∂A tr(AᵀA) = 2A         (Frobenius norm squared gradient)

Very useful when deriving:
- PCA objective
- Linear regression gradient
- Attention mechanism gradients
```

### Frobenius Norm via Trace
```
‖A‖²_F = Σᵢⱼ Aᵢⱼ² = tr(AᵀA) = tr(AAᵀ)
```

### Usage in AI/ML
- Frobenius norm for weight regularization: penalty = ‖W‖²_F = tr(WᵀW)
- Trace of covariance matrix = total variance in data
- Gradient derivations for matrix-valued objectives

---

## 6. Matrix Norms

### Frobenius Norm (Most Common in ML)
```
‖A‖_F = √(Σᵢⱼ Aᵢⱼ²) = √(tr(AᵀA))
```

Think of it as the L2 norm of all matrix elements laid out as a vector.

### Spectral Norm (Operator Norm)
```
‖A‖₂ = σ_max(A)    (largest singular value)

= max_{‖x‖=1} ‖Ax‖     (maximum "stretch" of A)
```

### Nuclear Norm
```
‖A‖_* = Σᵢ σᵢ(A)    (sum of all singular values)

Convex relaxation of matrix rank.
```

### Summary
| Norm | Formula | ML Use |
|------|---------|--------|
| Frobenius | √(Σ Aᵢⱼ²) | Weight regularization |
| Spectral | σ_max | Spectral normalization (GANs) |
| Nuclear | Σ σᵢ | Low-rank regularization |

---

## Practice Problems

### Problem 1
```
A = ⎡2  0  1⎤    B = ⎡1  3  2⎤
    ⎣1  3  2⎦        ⎣0  1  4⎦
```
Compute: a) A + B   b) 2A - B   c) A ⊙ B   d) Aᵀ   e) ‖A‖_F

### Problem 2
Verify the transpose rule (AB)ᵀ = BᵀAᵀ with:
```
A = ⎡1  2⎤    B = ⎡5  6  7⎤
    ⎣3  4⎦        ⎣8  9  0⎦
```

### Problem 3 — Backprop connection
In a neural network layer: Z = WX + B
where W ∈ ℝ³ˣ², X ∈ ℝ²ˣ⁴, B is broadcast.
- a) What is the shape of Z?
- b) If ∂L/∂Z = dZ has shape (3,4), what is the shape of ∂L/∂W?
  (Hint: use the rule ∂L/∂W = dZ · Xᵀ)
- c) What is the shape of ∂L/∂X?
  (Hint: ∂L/∂X = Wᵀ · dZ)

### Problem 4 — Trace
For A = [[1,2],[3,4]]:
- a) Compute tr(A)
- b) Compute tr(AᵀA)
- c) Verify tr(AᵀA) = ‖A‖²_F = 1²+2²+3²+4²

---

## Key Takeaways

✅ Matrix **addition** and **scalar multiplication** are element-wise — shapes must match.
✅ **Hadamard product** (⊙) = element-wise multiply — appears in LSTM gates and backprop.
✅ **Transpose rule**: (AB)ᵀ = BᵀAᵀ — order **reverses**. Critical in backpropagation.
✅ **Trace** is cyclic: tr(AB) = tr(BA) — powerful for gradient derivations.
✅ **Frobenius norm** = ‖A‖_F = √tr(AᵀA) — standard matrix regularization in ML.

---

*Next: [07 — Matrix Multiplication](07_Matrix_Multiplication.md)*