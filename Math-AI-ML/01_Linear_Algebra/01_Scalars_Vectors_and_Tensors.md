# 01 — Scalars, Vectors, and Tensors

## 1. Scalars

### Definition
A **scalar** is a single real number. It has **magnitude only** — no direction.

### Mathematical Notation
```
a ∈ ℝ        (a is a real number)
a = 5        (example scalar)
```

### Intuition
Think of a scalar as a single measurement:
- Temperature: 98.6°F
- Mass: 70 kg
- Learning rate in neural network: 0.001

### Examples
```
a = 3.14        (pi, a scalar)
b = -7          (negative scalar)
c = 0.001       (learning rate — a scalar hyperparameter)
```

### Usage in AI/ML
- **Learning rate** (α) is a scalar: controls step size in gradient descent
- **Loss value** is a scalar: a single number representing model error
- **Regularization coefficient** (λ) is a scalar

---

## 2. Vectors

### Definition
A **vector** is an **ordered list of numbers** arranged in a column (or row). It has both **magnitude and direction**.

### Mathematical Notation

A column vector with n elements:
```
        ⎡ x₁ ⎤
        ⎢ x₂ ⎥
x  =    ⎢ x₃ ⎥     where x ∈ ℝⁿ
        ⎢ ⋮  ⎥
        ⎣ xₙ ⎦
```

A row vector (transpose):
```
xᵀ = [x₁, x₂, x₃, ..., xₙ]
```

### Intuition
Think of a vector as:
- A **point** in n-dimensional space
- A **list of features** for one data sample
- An **arrow** with direction and length

### Concrete Example
A person described by 3 features:
```
x = [height, weight, age]ᵀ = [175, 70, 25]ᵀ
```

This vector lives in ℝ³ (3-dimensional real space).

### Dimension of a Vector
- A vector with n components lives in **ℝⁿ**
- ℝ² = 2D plane (x, y coordinates)
- ℝ³ = 3D space (x, y, z coordinates)
- ℝ¹⁰⁰⁰ = 1000-dimensional space (common in ML!)

### Visual Explanation (2D)
```
     y
     ↑
   3 ┤      • v = [2, 3]
   2 ┤    ↗
   1 ┤  ↗
     ┼──┬──→ x
     0  1  2
```
The vector v = [2, 3] is an arrow from origin to point (2, 3).

### Usage in AI/ML

| Vector Type | Example | Where Used |
|------------|---------|-----------|
| Feature vector | [age=25, income=50000, ...] | Input to ML model |
| Weight vector | [w₁, w₂, ..., wₙ] | Neural network parameters |
| Word embedding | 300-dim vector for "king" | NLP, Word2Vec |
| Gradient vector | [∂L/∂w₁, ∂L/∂w₂, ...] | Backpropagation |
| Probability vector | [0.1, 0.7, 0.2] | Softmax output |

---

## 3. Matrices

### Definition
A **matrix** is a 2D array of numbers with **m rows** and **n columns**.

### Mathematical Notation
```
        ⎡ a₁₁  a₁₂  ⋯  a₁ₙ ⎤
        ⎢ a₂₁  a₂₂  ⋯  a₂ₙ ⎥
A  =    ⎢  ⋮    ⋮   ⋱   ⋮  ⎥    where A ∈ ℝᵐˣⁿ
        ⎣ aₘ₁  aₘ₂  ⋯  aₘₙ ⎦
```

Element at row i, column j: **Aᵢⱼ** or **A[i,j]**

### Example (3×2 matrix)
```
        ⎡ 1  2 ⎤
A  =    ⎢ 3  4 ⎥     A ∈ ℝ³ˣ²  (3 rows, 2 columns)
        ⎣ 5  6 ⎦
```

### Intuition
A matrix can be thought of as:
- A **dataset** (rows = samples, columns = features)
- A **linear transformation** (rotates/scales vectors)
- A **collection of vectors** (each column is a vector)

### Usage in AI/ML
- **Dataset matrix X** ∈ ℝⁿˣᵈ: n samples, d features
- **Weight matrix W**: transforms layer activations
- **Covariance matrix**: captures feature relationships
- **Attention matrix**: in Transformer models

---

## 4. Tensors

### Definition
A **tensor** is a generalization of scalars, vectors, and matrices to **arbitrary dimensions** (called *axes* or *modes*).

### Tensor Order (Rank)

| Order | Name | Shape | Example |
|-------|------|-------|---------|
| 0 | Scalar | () | temperature = 98.6 |
| 1 | Vector | (n,) | [1, 2, 3] |
| 2 | Matrix | (m, n) | 28×28 image (grayscale) |
| 3 | 3rd-order tensor | (m, n, p) | 28×28×3 RGB image |
| 4 | 4th-order tensor | (b, m, n, p) | batch of images |

### Visual Explanation

```
Scalar (0D)    Vector (1D)    Matrix (2D)    Tensor (3D)
    •           [■ ■ ■]        ┌─────┐         ╔═════╗
                               │■ ■ ■│        ╔╝■ ■ ■╚╗
                               │■ ■ ■│        ╚╗■ ■ ■╔╝
                               └─────┘         ╚═════╝
  shape=()     shape=(3,)    shape=(3,3)    shape=(3,3,3)
```

### Concrete ML Example: RGB Image

An RGB image of size 64×64 pixels:
- Width: 64 pixels
- Height: 64 pixels  
- Channels: 3 (Red, Green, Blue)
- **Shape: (64, 64, 3)** — a rank-3 tensor

A batch of 32 such images:
- **Shape: (32, 64, 64, 3)** — a rank-4 tensor

### Tensor Indexing
For a 3D tensor T with shape (2, 3, 4):
```
T[0, 1, 2]     → element at batch=0, row=1, col=2
T[1, :, :]     → entire 3×4 slice at batch index 1
T[:, 0, :]     → first row across all batches
```

### Usage in AI/ML

| Tensor | Shape | Used In |
|--------|-------|---------|
| Input batch (images) | (B, H, W, C) | CNNs |
| Input batch (text) | (B, seq_len, d_model) | Transformers |
| Weight tensor in conv layer | (K, K, Cᵢₙ, Cₒᵤₜ) | CNNs |
| Attention scores | (B, heads, seq, seq) | Multi-head attention |
| Gradient tensor | same shape as weights | Backpropagation |

---

## 5. Notation Summary

| Symbol | Meaning |
|--------|---------|
| a ∈ ℝ | scalar a is a real number |
| **x** ∈ ℝⁿ | vector x with n real components |
| **A** ∈ ℝᵐˣⁿ | matrix A with m rows, n columns |
| **T** ∈ ℝᵈ¹ˣᵈ²ˣ...ˣᵈₖ | k-th order tensor |
| xᵀ | transpose of vector x |
| Aᵢⱼ | element at row i, column j of A |
| ‖x‖ | norm (length) of vector x |
| x·y or xᵀy | dot product of vectors x and y |

---

## 6. Practice Problems

### Problem 1 (Beginner)
Identify whether each of the following is a scalar, vector, matrix, or tensor:
- a) The number 42
- b) [3.5, 7.1, -2.0]
- c) A 28×28 grayscale image
- d) A dataset of 1000 images, each 32×32 pixels with 3 channels
- e) The loss value 0.0023

### Problem 2 (Intermediate)
You have a dataset with 500 patients and 20 medical features each.
- a) What shape is the data matrix X?
- b) What is the shape of a single patient's feature vector?
- c) If you add a label (0 or 1) to each patient, what is the shape of the label vector?

### Problem 3 (ML-context)
A convolutional neural network processes a batch of 64 color images, each 128×128 pixels.
- a) Write the shape of the input tensor.
- b) A conv layer has 32 filters of size 3×3. Write the shape of the weight tensor.
- c) After this layer (ignoring padding), the output shape is? (hint: (64, 126, 126, 32))

### Problem 4 (Implementation)
In Python/NumPy, write code to create:
```python
import numpy as np

# a) A scalar
a = ?

# b) A vector [1, 2, 3, 4, 5]
v = ?

# c) A 3×3 matrix of ones
A = ?

# d) A tensor of shape (2, 3, 4) filled with zeros
T = ?
```

---

## 7. Key Takeaways

✅ A **scalar** is a single number (0D).
✅ A **vector** is a 1D ordered list of numbers — the fundamental data unit in ML.
✅ A **matrix** is a 2D array — datasets, weight matrices, transformations.
✅ A **tensor** generalizes all of the above to any number of dimensions.
✅ In deep learning, **everything is a tensor** — inputs, weights, outputs, gradients.
✅ The **shape** of a tensor determines how operations can be applied to it.

---

*Next: [02 — Vector Operations](02_Vector_Operations.md)*