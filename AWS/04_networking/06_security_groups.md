# 06_security_groups.md

# 01. What is a Security Group

A **Security Group (SG)** is a **virtual firewall** for your EC2 instances or other AWS resources to **control inbound and outbound traffic**.  

- **Instance-level protection** → Each EC2 instance can have multiple SGs  
- **Stateful** → Return traffic is automatically allowed  
- **Integration** → Works with EC2, RDS, Lambda, ELB, and more

---

# 02. Inbound & Outbound Rules

- **Inbound rules** → Control **incoming traffic** to the instance  
- **Outbound rules** → Control **outgoing traffic** from the instance  

**Examples:**
- Allow HTTP (80) inbound from anywhere → public web server  
- Allow SSH (22) inbound from corporate IP → secure access  
- Allow all outbound → default for EC2 instances

---

# 03. Stateful Nature

- **Stateful firewall** → If inbound traffic is allowed, **response traffic is automatically allowed outbound**  
- No need to explicitly allow response traffic  
- Contrasts with **NACLs**, which are stateless

---

# 04. Best Practices

- Apply **least privilege principle** → only open required ports  
- Use **different SGs for different roles** (web, app, DB)  
- Avoid **wide-open rules** like 0.0.0.0/0 unless necessary  
- Monitor SG rules regularly for **security compliance**  
- Combine with **NACLs** for layered security

---

# 05. Use Cases

- Control **web server access** (HTTP/HTTPS)  
- Database security → allow access **only from application servers**  
- Lambda or ECS security → control traffic to APIs or other resources  
- Multi-tier architectures → isolate network layers with SGs

---

# 06. Interview / Exam Notes

- Security Groups → **stateful**, NACLs → **stateless**  
- Default SG allows **all outbound, denies all inbound**  
- Can attach **multiple SGs** to one resource  
- Rules are evaluated **allow-only**  
- Use SGs to **restrict access based on IP, port, and protocol**

---

# 07. Diagram Idea

```text
[EC2 Instance]
   Inbound Rules: 80/443 (HTTP/HTTPS)
   Outbound Rules: All traffic allowed
        |
   [Security Group]
        |
   [Internet / Other Instances]