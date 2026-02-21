# 07_nacl.md

# 01. What is a Network ACL (NACL)

A **Network ACL (NACL)** is a **stateless firewall** at the **subnet level** that controls **inbound and outbound traffic**.  

- Operates at the **subnet level** (vs Security Groups at instance level)  
- **Stateless** → Response traffic must be explicitly allowed  
- Provides an **additional layer of security** for VPCs  

---

# 02. Stateless Nature

- Each rule applies **independently** to inbound and outbound traffic  
- Must configure **allow rules for both directions**  
- Contrasts with **Security Groups**, which are stateful  

---

# 03. Rules: Allow / Deny

- NACL rules evaluated **numerically by rule number**  
- Each rule can **allow or deny traffic** based on:  
  - Protocol (TCP, UDP, ICMP)  
  - Port range  
  - Source / Destination IP  
- Default NACL: Allows all inbound and outbound traffic  
- Can create **custom NACLs** to block or allow specific traffic  

---

# 04. Associations with Subnets

- Each subnet **must be associated** with one NACL  
- Can associate **one NACL with multiple subnets**  
- Subnets can only have **one NACL at a time**  
- Default NACL is automatically associated with all subnets

---

# 05. Best Practices

- Use NACLs for **layered security** with Security Groups  
- Apply **deny rules** for known malicious IPs  
- Keep **numbering organized** for rule precedence  
- Combine with **logging (VPC Flow Logs)** for monitoring  
- Use **stateless rules** carefully to avoid traffic blockages  

---

# 06. Use Cases

- Restrict traffic to/from **specific IP ranges**  
- Block unwanted **ports or protocols** subnet-wide  
- Add **extra layer of security** for public-facing subnets  
- Audit and compliance control for network traffic

---

# 07. Interview / Exam Notes

- NACL → **stateless**, Security Group → **stateful**  
- Subnet-level firewall  
- Supports **allow and deny rules**  
- Rules evaluated by **rule number, lowest first**  
- Each subnet has **exactly one NACL**  
- Useful for **extra security on top of SGs**

---

# 08. Diagram Idea

```text
[Subnet 10.0.1.0/24]
    Inbound Rules: Allow 80/443, Deny 22 from 0.0.0.0/0
    Outbound Rules: Allow all
        |
   [Network ACL]
        |
   [Internet / Other Subnets]