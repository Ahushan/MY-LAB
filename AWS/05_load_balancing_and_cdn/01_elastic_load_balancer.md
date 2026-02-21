# 01_elastic_load_balancer.md

# 01. What is Elastic Load Balancer (ELB)

**Elastic Load Balancer (ELB)** automatically distributes incoming application traffic across multiple **targets** (EC2 instances, containers, IPs, Lambda functions) to improve **availability and fault tolerance**.  

- Managed AWS service → no server management  
- Supports **horizontal scaling** of applications  
- Provides **health checks** to route traffic only to healthy targets  

---

# 02. Types of ELB

### 2.1 Classic Load Balancer (CLB)
- Legacy ELB type  
- Operates at **Layer 4 (TCP) and Layer 7 (HTTP/HTTPS)**  
- Basic load balancing for **EC2 instances**  

### 2.2 Application Load Balancer (ALB)
- Operates at **Layer 7 (HTTP/HTTPS)**  
- Supports **content-based routing, host-based routing, path-based routing**  
- Ideal for **microservices and container-based applications**  

### 2.3 Network Load Balancer (NLB)
- Operates at **Layer 4 (TCP/UDP)**  
- Handles **millions of requests per second** with **low latency**  
- Ideal for **high-performance, latency-sensitive applications**

---

# 03. How it Works

1. Client sends request to **ELB DNS name**  
2. ELB **selects a healthy target** based on load balancing algorithm  
3. Request is **forwarded to the target** (EC2, container, or Lambda)  
4. ELB performs **health checks** and stops routing to **unhealthy targets**  

---

# 04. Load Balancing Algorithms

- **Round Robin** → Default for ALB (distributes traffic evenly)  
- **Least Outstanding Requests** → Sends requests to target with **fewest active requests**  
- **Flow Hashing** → Used by NLB for **TCP traffic**  

---

# 05. Use Cases

- Distribute traffic across **EC2 instances** in multiple AZs  
- Support **microservices architecture** with path-based routing (ALB)  
- Handle **high-throughput and low-latency workloads** (NLB)  
- Automatically **replace unhealthy instances** without downtime  

---

# 06. Best Practices

- Enable **cross-zone load balancing** for multi-AZ setups  
- Use **health checks** to detect unhealthy targets  
- Combine with **Auto Scaling** to handle traffic spikes  
- Use **TLS termination** at ELB for secure applications  
- Monitor metrics via **CloudWatch**  

---

# 07. Interview / Exam Notes

- ELB → **distributes traffic** across targets  
- ALB → Layer 7, content-based routing  
- NLB → Layer 4, high performance  
- Supports **multi-AZ** deployments and **health checks**  
- Integrates with **Auto Scaling, Route 53, and CloudWatch**  

---

# 08. Diagram Idea

```text
         [Clients]
             |
         [ELB DNS]
     ---------------------
     |         |         |
 [EC2-AZ1] [EC2-AZ2] [EC2-AZ3]
 (Healthy)  (Healthy)  (Healthy)