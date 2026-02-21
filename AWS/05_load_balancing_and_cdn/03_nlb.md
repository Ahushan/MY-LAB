# 03_nlb.md

# 01. What is Network Load Balancer (NLB)

**Network Load Balancer (NLB)** is a Layer 4 load balancer that distributes **TCP, UDP, and TLS traffic** with **ultra-low latency and high throughput**.  

- Ideal for **performance-sensitive and high-traffic applications**  
- Can handle **millions of requests per second**  
- Supports **static IPs and Elastic IPs** for targets  

---

# 02. Key Features

- **High Performance** → Low latency, high throughput  
- **Static IP Support** → Assign Elastic IPs for predictable endpoints  
- **TLS Termination** → Offload TLS decryption to NLB  
- **Zonal Isolation** → Targets can fail independently in an AZ  
- **Preserve Source IP** → Useful for applications requiring original client IP  

---

# 03. Components of NLB

### 3.1 Listeners
- Listens for incoming TCP, UDP, or TLS connections  
- Forwards traffic to **target groups** based on listener rules  

### 3.2 Target Groups
- Group of targets (EC2, IP addresses, Lambda)  
- Health checks determine if a target is healthy or unhealthy  

### 3.3 Rules
- NLB rules are simpler than ALB → mainly **port/protocol based**  
- No content-based routing like ALB  

---

# 04. Health Checks

- Protocol-based checks for **TCP, HTTP, HTTPS, or custom ports**  
- Configurable intervals, timeouts, and thresholds  
- Ensures **traffic only goes to healthy targets**  

---

# 05. Use Cases

- High-performance APIs requiring **low latency**  
- Real-time gaming, IoT, or financial applications  
- Applications requiring **static IPs**  
- TLS termination for **secure traffic offloading**  
- Multi-AZ architectures needing **resilient load distribution**  

---

# 06. Best Practices

- Deploy **one NLB per AZ** for high availability  
- Use **Elastic IPs** for predictable DNS mapping  
- Monitor **target health and metrics** with CloudWatch  
- Combine with **Auto Scaling groups** for dynamic traffic  
- Use **TLS certificates** from ACM for encrypted traffic  

---

# 07. Interview / Exam Notes

- NLB → **Layer 4, high throughput, low latency**  
- Supports **TCP, UDP, TLS** protocols  
- Works with **target groups** and **health checks**  
- Preserves **source IP** for back-end applications  
- Best for **performance-sensitive or high-traffic workloads**  

---

# 08. Diagram Idea

```text
       [Clients]
           |
        [NLB Listener]
       /     |      \
[Target Group1] [Target Group2] [Target Group3]
     |             |                |
   [EC2]         [EC2]            [EC2]