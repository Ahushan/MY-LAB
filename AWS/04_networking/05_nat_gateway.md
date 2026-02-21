# 05_nat_gateway.md

# 01. What is a NAT Gateway

A **NAT Gateway** (Network Address Translation Gateway) allows **instances in private subnets** to access the internet for updates, downloads, or API calls **without exposing them to incoming internet traffic**.

- Managed AWS service → Highly available and scalable  
- Used for **outbound-only internet access** from private subnets  
- Replaces NAT instances in most cases  

---

# 02. NAT Gateway vs NAT Instance

| Feature              | NAT Gateway           | NAT Instance             |
|----------------------|--------------------|-------------------------|
| Managed Service      | Yes                 | No                      |
| High Availability    | Built-in            | Manual                  |
| Scaling              | Automatic           | Manual                  |
| Maintenance          | None                | Patch OS, manage        |
| Cost                 | Higher than NAT Inst | Lower, but manual work  |

---

# 03. How it Works

1. NAT Gateway is deployed in a **public subnet** with an **Elastic IP**  
2. Private subnet instances route traffic to **NAT Gateway**  
3. NAT Gateway forwards traffic to the **internet via IGW**  
4. Responses are sent back to the private subnet instances  

---

# 04. High Availability Considerations

- NAT Gateway is **AZ-specific**  
- For multi-AZ architectures, deploy **one NAT Gateway per AZ**  
- Prevents **single point of failure** for private subnet connectivity  

---

# 05. Use Cases

- Private subnet EC2 instances need **internet for OS updates**  
- Private applications calling **external APIs**  
- Hybrid cloud setups requiring **secure outbound traffic**  
- Containerized workloads in private subnets needing internet access  

---

# 06. Best Practices

- Deploy **one NAT Gateway per AZ** for HA  
- Combine with **route tables** to control outbound traffic  
- Monitor using **VPC Flow Logs**  
- Avoid unnecessary outbound traffic to **reduce costs**  
- Use **Elastic IPs** for consistent public IP addressing  

---

# 07. Interview / Exam Notes

- NAT Gateway provides **outbound-only internet** for private subnets  
- Managed service → no patching, auto-scaled  
- NAT Gateway is **AZ-specific** → deploy per AZ  
- Route private subnet traffic through NAT Gateway  
- High availability requires **multiple NAT Gateways** in multi-AZ VPC  

---

# 08. Diagram Idea

```text
[Private Subnet]
    |
    | 0.0.0.0/0 --> Route Table
    v
[NAT Gateway in Public Subnet with Elastic IP]
    |
    v
[Internet Gateway] --> [Internet]