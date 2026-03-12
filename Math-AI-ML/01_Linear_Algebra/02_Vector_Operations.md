# 02 — Vector Operations

## 1. Vector Addition

### Definition
Adding two vectors of the **same dimension** produces a new vector where each component is the sum of the corresponding components.

### Formula
```
If x = [x₁, x₂, ..., xₙ]ᵀ  and  y = [y₁, y₂, ..., yₙ]ᵀ

then  x + y = [x₁+y₁, x₂+y₂, ..., xₙ+yₙ]ᵀ
```

### Numerical Example
```
x = [1, 2, 3]ᵀ
y = [4, 5, 6]ᵀ

x + y = [1+4, 2+5, 3+6]ᵀ = [5, 7, 9]ᵀ
```

### Visual (2D)
```
y
↑
4│    x+y ●
3│       ↗
2│   y ↗
1│  ↗  →
 └──────→ x
    x
```
Vector addition = **tip-to-tail placement** of arrows.

### Usage in AI/ML
- **Residual connections** in ResNets: output = F(x) + x (add vectors)
- **Embedding arithmetic**: king - man + woman ≈ queen (vector addition/subtraction)
- **Bias addition**: z = Wx + b (adding bias vector b)

---

## 2. Scalar Multiplication

### Definition
Multiplying a vector by a scalar **scales every component** of the vector.

### Formula
```
If α ∈ ℝ  and  x = [x₁, x₂, ..., xₙ]ᵀ

then  αx = [αx₁, αx₂, ..., αxₙ]ᵀ
```

### Numerical Example
```
α = 3
x = [1, -2, 4]ᵀ

αx = [3·1, 3·(-2), 3·4]ᵀ = [3, -6, 12]ᵀ
```

### Geometric Intuition
- α > 1: stretches the vector (makes it longer)
- 0 < α < 1: shrinks the vector (makes it shorter)
- α = -1: reverses the direction
- α = 0: collapses the vector to the zero vector

### Usage in AI/ML
- **Gradient descent update**: w ← w − **α**·∇L   (α is learning rate, ∇L is gradient vector)
- **Normalization**: dividing by scalar to normalize vectors

---

## 3. Dot Product (Inner Product)

### Definition
The dot product of two vectors of the same dimension produces a **scalar**.

### Formula
```
x · y  =  xᵀy  =  Σᵢ xᵢyᵢ  =  x₁y₁ + x₂y₂ + ... + xₙyₙ
```

### Numerical Example
```
x = [1, 2, 3]ᵀ
y = [4, 5, 6]ᵀ

x · y = (1)(4) + (2)(5) + (3)(6)
      = 4 + 10 + 18
      = 32
```

### Geometric Interpretation
The dot product relates to the **angle θ** between two vectors:
```
x · y = ‖x‖ · ‖y‖ · cos(θ)

Therefore:  cos(θ) = (x · y) / (‖x‖ · ‖y‖)
```

This means:
- x · y > 0  → angle < 90° (vectors point in similar direction)
- x · y = 0  → angle = 90° (vectors are **orthogonal/perpendicular**)
- x · y < 0  → angle > 90° (vectors point in opposite direction)

### Step-by-Step Angle Calculation
```
x = [1, 0]ᵀ,   y = [1, 1]ᵀ

x · y = (1)(1) + (0)(1) = 1

‖x‖ = √(1² + 0²) = 1
‖y‖ = √(1² + 1²) = √2 ≈ 1.414

cos(θ) = 1 / (1 × 1.414) = 0.707

θ = arccos(0.707) = 45°
```

### Usage in AI/ML — Critical

| Application | Formula | Where |
|------------|---------|-------|
| Neuron computation | z = wᵀx + b | Every neural network layer |
| Similarity | cos(θ) = xᵀy/(‖x‖‖y‖) | Recommendation systems, NLP |
| Attention | score = qᵀk | Transformer attention mechanism |
| Linear regression | ŷ = wᵀx | Prediction |
| Kernel trick | k(x,z) = φ(x)·φ(z) | SVMs |

**Deep Learning Neuron:**
```
Input:  x = [x₁, x₂, x₃]ᵀ
Weight: w = [w₁, w₂, w₃]ᵀ
Bias:   b

Output: z = w₁x₁ + w₂x₂ + w₃x₃ + b  =  wᵀx + b
```
This is **exactly** a dot product + scalar! Every neuron computes this.

---

## 4. Vector Norms (Length/Magnitude)

### Definition
A **norm** measures the **size or length** of a vector.

### L2 Norm (Euclidean Norm) — Most Common

```
‖x‖₂ = √(x₁² + x₂² + ... + xₙ²) = √(xᵀx)
```

**Example:**
```
x = [3, 4]ᵀ

‖x‖₂ = √(3² + 4²) = √(9 + 16) = √25 = 5
```

### L1 Norm (Manhattan Norm)
```
‖x‖₁ = |x₁| + |x₂| + ... + |xₙ|
```

**Example:**
```
x = [-2, 3, -1]ᵀ

‖x‖₁ = |-2| + |3| + |-1| = 2 + 3 + 1 = 6
```

### L∞ Norm (Max Norm)
```
‖x‖∞ = max(|x₁|, |x₂|, ..., |xₙ|)
```

**Example:**
```
x = [-2, 3, -1]ᵀ

‖x‖∞ = max(2, 3, 1) = 3
```

### Lp Norm (General)
```
‖x‖ₚ = (|x₁|ᵖ + |x₂|ᵖ + ... + |xₙ|ᵖ)^(1/p)
```

### Norm Properties
1. **Non-negativity**: ‖x‖ ≥ 0, and ‖x‖ = 0 iff x = 0
2. **Scalar multiplication**: ‖αx‖ = |α|·‖x‖
3. **Triangle inequality**: ‖x + y‖ ≤ ‖x‖ + ‖y‖

### Usage in AI/ML

| Norm | Used For |
|------|---------|
| L2 | Euclidean distance, L2 regularization (Ridge), gradient magnitude |
| L1 | L1 regularization (Lasso) → promotes sparsity |
| L∞ | Robustness in adversarial ML |
| Frobenius (matrix norm) | Regularization of weight matrices |

**Regularization:**
```
L2 regularization:  Loss = MSE + λ‖w‖₂²   (penalizes large weights)
L1 regularization:  Loss = MSE + λ‖w‖₁    (forces many weights to zero)
```

---

## 5. Unit Vectors and Normalization

### Definition
A **unit vector** has a norm equal to 1.

### Normalization Formula
```
x̂ = x / ‖x‖₂
```

### Example
```
x = [3, 4]ᵀ
‖x‖₂ = 5

x̂ = [3/5, 4/5]ᵀ = [0.6, 0.8]ᵀ

Verify: ‖x̂‖₂ = √(0.6² + 0.8²) = √(0.36 + 0.64) = √1 = 1  ✓
```

### Usage in AI/ML
- **Cosine similarity**: normalize both vectors, then take dot product
- **Layer normalization**: normalize activations in neural networks
- **Word embeddings**: often normalized for similarity comparisons
- **Batch normalization**: normalize across batch dimension

---

## 6. Cosine Similarity

### Definition
Measures the **cosine of the angle** between two vectors — captures directional similarity, **not magnitude**.

### Formula
```
cos_sim(x, y) = (x · y) / (‖x‖₂ · ‖y‖₂)  ∈ [-1, 1]
```

### Interpretation
| Value | Meaning |
|-------|---------|
| 1.0 | Identical direction (perfectly similar) |
| 0.0 | Orthogonal (no similarity) |
| -1.0 | Opposite directions (completely dissimilar) |

### Numerical Example
```
x = [1, 2, 3]ᵀ   (representing document A)
y = [1, 0, 1]ᵀ   (representing document B)

x · y = 1·1 + 2·0 + 3·1 = 4

‖x‖ = √(1 + 4 + 9) = √14 ≈ 3.742
‖y‖ = √(1 + 0 + 1) = √2 ≈ 1.414

cos_sim = 4 / (3.742 × 1.414) = 4 / 5.292 ≈ 0.756
```
These documents are ~75.6% similar in direction.

### Usage in AI/ML
- **Semantic search**: find most similar embeddings
- **Recommendation systems**: user-item similarity
- **Face recognition**: verify face identity
- **Transformer attention**: scaled dot-product attention = scaled cosine similarity

---

## 7. Cross Product (3D only)

### Definition
For **3D vectors only**, the cross product produces a vector **perpendicular** to both input vectors.

### Formula
```
x × y = ⎡ x₂y₃ - x₃y₂ ⎤
        ⎢ x₃y₁ - x₁y₃ ⎥
        ⎣ x₁y₂ - x₂y₁ ⎦
```

### Example
```
x = [1, 0, 0]ᵀ   (x-axis)
y = [0, 1, 0]ᵀ   (y-axis)

x × y = [(0·0 - 0·1), (0·0 - 1·0), (1·1 - 0·0)]ᵀ = [0, 0, 1]ᵀ  (z-axis)
```

### Usage in AI/ML
- Primarily used in **3D computer graphics** and robotics
- **Normal vector computation** in 3D mesh neural networks
- Less common in general ML, but important in geometric deep learning

---

## 8. Vector Projection

### Definition
The **projection** of vector x onto vector y gives the component of x that lies along the direction of y.

### Formula
```
proj_y(x) = (x·y / ‖y‖²) · y     (vector projection)

scalar_comp = x·y / ‖y‖           (scalar projection)
```

### Visual
```
     x
    /|
   / |
  /  |
 /   |
y────┘
↑
proj_y(x) (shadow of x onto y)
```

### Example
```
x = [2, 3]ᵀ
y = [1, 0]ᵀ   (x-axis)

scalar_comp = (2·1 + 3·0) / 1 = 2

proj_y(x) = 2 · [1, 0]ᵀ = [2, 0]ᵀ
```
x projects to [2, 0] on the x-axis.

### Usage in AI/ML
- **PCA**: project data onto principal components
- **Gram-Schmidt**: build orthogonal basis (used in QR decomposition)
- **Attention mechanism**: projecting query onto key space

---

## 9. Linear Combinations

### Definition
A **linear combination** of vectors v₁, v₂, ..., vₖ is:
```
c₁v₁ + c₂v₂ + ... + cₖvₖ
```
where c₁, c₂, ..., cₖ are scalar coefficients.

### Example
```
v₁ = [1, 0]ᵀ
v₂ = [0, 1]ᵀ

3v₁ + 5v₂ = 3[1,0]ᵀ + 5[0,1]ᵀ = [3,0]ᵀ + [0,5]ᵀ = [3,5]ᵀ

Any 2D vector can be expressed as a linear combination of v₁ and v₂!
```

### Usage in AI/ML
- A neural network layer output is a linear combination: z = Wx + b
- **Word embeddings**: meaning of a sentence ≈ linear combination of word vectors
- Whole concept of **span** and **basis** builds on linear combinations

---

## 10. Summary Table

| Operation | Formula | Result Type | Key AI/ML Use |
|-----------|---------|-------------|---------------|
| Addition | x + y | Vector | ResNets, bias addition |
| Scalar mult | αx | Vector | Gradient scaling |
| Dot product | xᵀy | Scalar | Neuron computation |
| L2 Norm | √(xᵀx) | Scalar | Distance, regularization |
| L1 Norm | Σ|xᵢ| | Scalar | Lasso regularization |
| Normalize | x/‖x‖ | Unit vector | Embeddings, attention |
| Cosine sim | xᵀy/(‖x‖‖y‖) | Scalar [-1,1] | Similarity search |
| Projection | (x·y/‖y‖²)y | Vector | PCA, attention |

---

## Practice Problems

### Problem 1 — Vector Arithmetic
Given: a = [1, -2, 3]ᵀ and b = [2, 0, -1]ᵀ
- a) Compute a + b
- b) Compute 3a - 2b
- c) Compute ‖a‖₂, ‖b‖₂, ‖a‖₁

### Problem 2 — Dot Product
Given: x = [2, 1, -3]ᵀ and y = [1, 4, 2]ᵀ
- a) Compute xᵀy
- b) Compute the angle between x and y in degrees
- c) Are x and y orthogonal?

### Problem 3 — Neural Network Neuron
A single neuron has weights w = [0.5, -0.3, 0.8]ᵀ and bias b = 0.1.
Input is x = [1.0, 2.0, 0.5]ᵀ.
- a) Compute z = wᵀx + b (the pre-activation)
- b) If the activation is ReLU: f(z) = max(0, z), what is the output?

### Problem 4 — Cosine Similarity
Two word embeddings: "cat" = [0.2, 0.8, 0.1]ᵀ, "dog" = [0.3, 0.7, 0.2]ᵀ
- a) Compute cosine similarity between "cat" and "dog"
- b) Are these words semantically similar? (cosine > 0.9 suggests high similarity)

### Problem 5 — Regularization
Weight vector: w = [3, -2, 0, 1, -4]ᵀ
- a) Compute L2 regularization term: ‖w‖₂²
- b) Compute L1 regularization term: ‖w‖₁
- c) If learning rate α = 0.01 and gradient ∇L = [0.1, -0.2, 0.0, 0.3, -0.1]ᵀ, compute new weight w' = w - α∇L

---

## Answers

**Problem 1:** a) [3,-2,2]ᵀ  b) [-1,-6,11]ᵀ  c) ‖a‖₂=√14≈3.74, ‖b‖₂=√5≈2.24, ‖a‖₁=6

**Problem 2:** a) xᵀy = 2-8-6 = ... wait: (2)(1)+(1)(4)+(-3)(2) = 2+4-6 = 0  b) θ = 90° (orthogonal!)  c) Yes, xᵀy = 0

**Problem 3:** a) z = 0.5(1)+(-0.3)(2)+0.8(0.5)+0.1 = 0.5-0.6+0.4+0.1 = 0.4  b) ReLU(0.4) = 0.4

**Problem 5:** a) 9+4+0+1+16 = 30  b) 3+2+0+1+4 = 10  c) [2.999, -2.002, 0, 0.997, -3.999]ᵀ

---

## Key Takeaways

✅ **Vector addition** and **scalar multiplication** are the atomic operations — everything else builds on them.
✅ The **dot product** is the most important vector operation in ML — it powers neurons, attention, and similarity.
✅ **Norms** measure size — L2 is most common, L1 promotes sparsity.
✅ **Cosine similarity** = normalized dot product — measures direction, not magnitude.
✅ **Every neural network layer** computes z = Wx + b — which is just dot products in matrix form.

---

*Next: [03 — Vector Spaces and Subspaces](03_Vector_Spaces_and_Subspaces.md)*