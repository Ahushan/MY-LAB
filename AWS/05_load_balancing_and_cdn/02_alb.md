# 02_alb.md

# 01. What is Application Load Balancer (ALB)

**Application Load Balancer (ALB)** is a Layer 7 load balancer that distributes **HTTP/HTTPS traffic** based on **content**.  

- Ideal for **microservices, containerized applications, and modern web apps**  
- Supports **advanced routing** (host, path, query, headers)  
- Provides **SSL/TLS termination**  

---

# 02. Key Features

- **Content-Based Routing** → Route requests based on URL path or host  
- **Host-Based Routing** → Route traffic to different target groups per domain  
- **Path-Based Routing** → Route traffic to different targets based on URL path  
- **WebSocket Support** → Real-time communication  
- **Redirects & Fixed Responses** → HTTP → HTTPS redirects, custom error messages  

---

# 03. Components of ALB

### 3.1 Listeners
- Check for connection requests from clients  
- Specify **protocol and port** (HTTP, HTTPS)  
- Routes requests to **target groups** based on rules  

### 3.2 Target Groups
- Logical grouping of targets (EC2, Lambda, IP addresses)  
- Each target group has **health checks** to monitor targets  
- Requests are routed to **healthy targets** only  

### 3.3 Rules
- Control routing behavior for **host, path, headers, query strings**  
- Evaluate rules **in order** and route to corresponding target group  

---

# 04. Health Checks

- Monitor target **availability and responsiveness**  
- Configure parameters:  
  - Protocol (HTTP/HTTPS)  
  - Path (/health or custom)  
  - Interval, timeout, healthy/unhealthy thresholds  
- Automatically stop routing to **unhealthy targets**  

---

# 05. Use Cases

- Microservices → Route traffic to different services via **host or path rules**  
- Web apps with multiple **API versions** → version-based routing  
- Secure applications → **TLS termination at ALB**  
- Real-time apps → **WebSocket support**  

---

# 06. Best Practices

- Use **HTTPS listeners** for secure traffic  
- Enable **cross-zone load balancing** for high availability  
- Monitor **target health and metrics** with CloudWatch  
- Use **sticky sessions** only when needed (stateful sessions)  
- Combine ALB with **Auto Scaling groups** for dynamic workloads  

---

# 07. Interview / Exam Notes

- ALB → **Layer 7 load balancer**, supports content-based routing  
- Works with **Target Groups and Listeners**  
- Health checks ensure traffic only goes to **healthy targets**  
- Supports **microservices, WebSockets, and SSL termination**  
- Can integrate with **Route 53** for global routing  

---

# 08. Diagram Idea

```text
        [Clients]
            |
        [ALB Listener]
       /           \
[Target Group 1]  [Target Group 2]
    /      \         /      \
[EC2]   [EC2]   [EC2]   [EC2]