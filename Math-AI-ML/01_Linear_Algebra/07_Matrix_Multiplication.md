# 07 — Matrix Multiplication

## 1. Definition

### The Rule: (m×n) × (n×p) → (m×p)
```
The INNER dimensions must match.
The OUTER dimensions give the result shape.

A       ×    B     =    C
(m×n)      (n×p)       (m×p)
```

### Element Formula
```
Cᵢⱼ = Σₖ₌₁ⁿ Aᵢₖ · Bₖⱼ     (dot product of row i of A with column j of B)
```

In words: **row i of A dotted with column j of B** gives entry (i,j) of C.

---

## 2. Step-by-Step Example

```
A = ⎡1  2  3⎤    B = ⎡7   8⎤
    ⎣4  5  6⎦        ⎢9  10⎥
                     ⎣11  12⎦

A ∈ ℝ²ˣ³,  B ∈ ℝ³ˣ²  →  C = AB ∈ ℝ²ˣ²

C₁₁ = row1(A) · col1(B) = 1·7 + 2·9 + 3·11  = 7 + 18 + 33  = 58
C₁₂ = row1(A) · col2(B) = 1·8 + 2·10 + 3·12 = 8 + 20 + 36  = 64
C₂₁ = row2(A) · col1(B) = 4·7 + 5·9 + 6·11  = 28 + 45 + 66 = 139
C₂₂ = row2(A) · col2(B) = 4·8 + 5·10 + 6·12 = 32 + 50 + 72 = 154

C = ⎡ 58   64⎤
    ⎣139  154⎦
```

---

## 3. Four Ways to View Matrix Multiplication

Understanding these four perspectives is essential for ML.

### View 1: Dot Products (Standard)
```
Cᵢⱼ = (row i of A) · (col j of B)
```

### View 2: Column View — Linear Combinations of Columns
```
Each column of C is a linear combination of columns of A:

C[:,j] = B₁ⱼ·A[:,1] + B₂ⱼ·A[:,2] + ... + Bₙⱼ·A[:,n]

C[:,j] = A · B[:,j]
```

**Intuition**: Matrix-vector product Ax is a linear combination of columns of A, weighted by x.

### View 3: Row View — Linear Combinations of Rows
```
Each row of C is a linear combination of rows of B:

C[i,:] = A_{i1}·B[1,:] + A_{i2}·B[2,:] + ... + A_{in}·B[n,:]
```

### View 4: Sum of Rank-1 Matrices (Outer Products)
```
AB = Σₖ₌₁ⁿ A[:,k] · B[k,:]ᵀ    (sum of n rank-1 outer products)
```

This view reveals how matrix multiplication accumulates information from each "layer" k.

---

## 4. Properties

```
(AB)C = A(BC)              Associativity ✓
A(B+C) = AB + AC           Distributivity ✓
(A+B)C = AC + BC           Distributivity ✓
αAB = (αA)B = A(αB)        Scalar commutativity ✓

AB ≠ BA  in general!       NOT commutative ✗
AB = 0  does NOT imply A=0 or B=0  ✗
AI = IA = A                Identity ✓
(AB)ᵀ = BᵀAᵀ               Transpose reversal ✓
(AB)⁻¹ = B⁻¹A⁻¹            Inverse reversal ✓ (if invertible)
```

### Non-Commutativity Example
```
A = ⎡1  2⎤    B = ⎡0  1⎤
    ⎣0  0⎦        ⎣1  0⎦

AB = ⎡1·0+2·1  1·1+2·0⎤ = ⎡2  1⎤
     ⎣0·0+0·1  0·1+0·0⎦   ⎣0  0⎦

BA = ⎡0·1+1·0  0·2+1·0⎤ = ⎡0  0⎤
     ⎣1·1+0·0  1·2+0·0⎦   ⎣1  2⎦

AB ≠ BA  ✓ (confirmed: order matters!)
```

---

## 5. Matrix-Vector Multiplication (Special Case)

This is the most important case in ML — it IS the neural network layer computation.

```
A ∈ ℝᵐˣⁿ,  x ∈ ℝⁿ  →  y = Ax ∈ ℝᵐ

yᵢ = Σⱼ Aᵢⱼ xⱼ     (i-th output = dot product of i-th row with x)
```

### Geometric Meaning
Ax is a **linear transformation** of x:
- **Rotation** (if A is orthogonal)
- **Scaling** (if A is diagonal)
- **Projection** onto a subspace
- **Any combination** of the above

### Neural Network Layer as Matrix-Vector Product
```
Single input sample x ∈ ℝⁿ:
z = Wx + b    (W ∈ ℝᵐˣⁿ, b ∈ ℝᵐ)

Row i of W = weight vector of neuron i
yᵢ = wᵢᵀx + bᵢ    (output of neuron i = dot product + bias)
```

---

## 6. Batched Matrix Multiplication (Batch Processing)

### Why We Use Batches
Instead of one sample x ∈ ℝⁿ, process a batch X ∈ ℝⁿˣᴮ (n features, B samples).

```
X ∈ ℝⁿˣᴮ     (each column = one sample)
W ∈ ℝᵐˣⁿ     (weight matrix)
B_bias ∈ ℝᵐˣ¹ (broadcast over batch)

Z = WX + B_bias    (Z ∈ ℝᵐˣᴮ — all samples processed at once!)
```

This is **massively parallelizable** on GPUs — the entire reason deep learning is fast.

### Common ML Convention (Rows = Samples)
Most frameworks (PyTorch, NumPy) use row-convention: **rows = samples**.

```
X ∈ ℝᴮˣⁿ      (B samples, n features — each ROW is a sample)
W ∈ ℝⁿˣᵐ      (weight matrix, transposed from above)

Z = XW + b     (Z ∈ ℝᴮˣᵐ)

PyTorch: output = input @ weight.T + bias
```

---

## 7. Computational Cost

### Time Complexity
Matrix multiplication A(m×n) × B(n×p):
```
Cost: O(m · n · p)   multiplications and additions

Example: (1000×500) × (500×200) = O(1000·500·200) = 10⁸ operations
```

### Why This Matters for Deep Learning
```
GPT-3 has ~96 transformer layers.
Each layer has several matrix multiplications.
Each matmul can be 12288×12288 or larger.

Training one forward pass = billions of FLOPs (Floating Point Operations)
This is why GPUs/TPUs with thousands of cores are necessary.

GPUs excel at matrix multiplication — it's their primary design goal.
```

### Strassen Algorithm
For square n×n matrices, naive cost O(n³). Strassen achieves O(n^2.81).
Modern research: best known is ~O(n^2.37). Used in some ML frameworks for large matrices.

---

## 8. Block Matrix Multiplication

### Definition
Partition matrices into blocks and multiply block-wise:
```
⎡A₁₁  A₁₂⎤ ⎡B₁₁  B₁₂⎤ = ⎡A₁₁B₁₁ + A₁₂B₂₁   A₁₁B₁₂ + A₁₂B₂₂⎤
⎣A₂₁  A₂₂⎦ ⎣B₂₁  B₂₂⎦   ⎣A₂₁B₁₁ + A₂₂B₂₁   A₂₁B₁₂ + A₂₂B₂₂⎦
```
(Works as long as inner block dimensions are compatible.)

### Usage in AI/ML
- **Multi-head attention**: each head processes a block of the embedding
- **Distributed training**: split large weight matrices across GPUs
- **Efficient transformers**: block-sparse attention patterns

---

## 9. Numerical Example — Full Neural Network Forward Pass

```
Input (batch of 2 samples, 3 features each):
X = ⎡1.0  0.5  -1.0⎤   (X ∈ ℝ²ˣ³, rows = samples)
    ⎣0.0  1.0   0.5⎦

Layer 1: W₁ ∈ ℝ³ˣ⁴ (3 features in → 4 neurons out)
W₁ = ⎡0.1  0.2  -0.1   0.3⎤
     ⎢0.4  0.0   0.2  -0.1⎥
     ⎣-0.2  0.3  0.1   0.0⎦

b₁ = [0.1, 0.0, 0.1, 0.0]   (bias vector, broadcast over batch)

Z₁ = X · W₁ + b₁

Z₁[0,:] = [1.0, 0.5, -1.0] · W₁ + b₁
         = [1·0.1+0.5·0.4+(-1)·(-0.2),  ... ]
         = [0.1+0.2+0.2,  0.2+0+(-0.3),  -0.1+0.1+(-0.1),  0.3+(-0.05)+0] + b₁
         = [0.5, -0.1, -0.1, 0.25] + [0.1, 0.0, 0.1, 0.0]
         = [0.6, -0.1, 0.0, 0.25]

Z₁[1,:] = [0.0, 1.0, 0.5] · W₁ + b₁
         = [0+0.4+(-0.1), 0+0+0.15, 0+0.2+0.05, 0+(-0.1)+0] + b₁
         = [0.3, 0.15, 0.25, -0.1] + [0.1, 0.0, 0.1, 0.0]
         = [0.4, 0.15, 0.35, -0.1]

Z₁ = ⎡0.6  -0.1   0.0   0.25⎤
     ⎣0.4   0.15  0.35  -0.1 ⎦

A₁ = ReLU(Z₁) = ⎡0.6  0.0   0.0   0.25⎤  (ReLU zeros out negatives)
                ⎣0.4  0.15  0.35   0.0 ⎦
```

---

## 10. Practice Problems

### Problem 1 — Basic Multiplication
```
A = ⎡1  0⎤    B = ⎡3  4⎤
    ⎢2  1⎥        ⎣5  6⎦
    ⎣1  3⎦
```
- a) Compute AB. What are the shapes?
- b) Can you compute BA? Why or why not?

### Problem 2 — Rank-1 Outer Product View
```
a = [1, 2, 3]ᵀ,   b = [4, 5]ᵀ
```
- a) Compute the outer product abᵀ (result is a 3×2 matrix)
- b) What is the rank of abᵀ?

### Problem 3 — Neural Network Forward Pass
```
W = ⎡0.5  -0.5⎤    x = ⎡2.0⎤    b = ⎡0.1⎤
    ⎣0.3   0.7⎦        ⎣1.0⎦        ⎣-0.2⎦
```
- a) Compute z = Wx + b
- b) Apply sigmoid: a = σ(z) where σ(z) = 1/(1+e^(-z))

### Problem 4 — Batched Processing
```
X = ⎡1  2⎤    W = ⎡0.5  0.1  0.3⎤
    ⎢3  4⎥        ⎣0.2  0.4  0.1⎦
    ⎣5  6⎦
```
- a) Compute Z = XW (no bias). Shape?
- b) This represents processing 3 samples through a 2→3 layer. Identify the batch dimension.

### Problem 5 — Computational Cost
A transformer model has embedding dimension d=768.
One self-attention layer computes: Q = XW_Q, K = XW_K, V = XW_V
where X ∈ ℝˢˣ⁷⁶⁸ (s = sequence length = 512) and each W ∈ ℝ⁷⁶⁸ˣ⁷⁶⁸.
- a) How many FLOPs to compute Q?
- b) How many FLOPs for the attention score matrix QKᵀ ∈ ℝˢˣˢ?

---

## Key Takeaways

✅ **Rule**: (m×n)(n×p) → (m×p) — inner dimensions must match.
✅ **Cᵢⱼ = row i of A dot column j of B** — the fundamental definition.
✅ Matrix multiplication is **NOT commutative**: AB ≠ BA in general.
✅ **Column view**: Ax = linear combination of columns of A — geometrically powerful.
✅ **Batch processing** = one matrix multiply for all samples — this is why GPUs dominate DL.
✅ A neural network **forward pass** is entirely matrix multiplications + activation functions.
✅ Computational cost = O(m·n·p) — matrix multiply is the bottleneck of deep learning.

---

*Next: [08 — Determinants](08_Determinants.md)*