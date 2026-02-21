# 08_direct_connect.md

# 01. What is AWS Direct Connect

**AWS Direct Connect** is a **dedicated network connection** between your on-premises data center and AWS.  

- Provides **private, low-latency, high-bandwidth connectivity**  
- Bypasses the public internet → **more reliable and secure**  
- Integrates with **VPCs, public AWS services, and hybrid cloud architectures**

---

# 02. Benefits

- **Consistent network performance** vs internet VPN  
- **Lower bandwidth costs** for data transfer  
- **Enhanced security** by avoiding public internet  
- Supports **hybrid cloud architectures**  
- Ideal for **high-volume workloads** or **latency-sensitive applications**

---

# 03. How it Works

1. Create a **Direct Connect connection** at a supported AWS location  
2. Configure **virtual interfaces (VIFs)**:  
   - **Private VIF** → Access VPC resources  
   - **Public VIF** → Access AWS public services (S3, DynamoDB, etc.)  
3. Link Direct Connect to **VPC via Virtual Private Gateway or Transit Gateway**  
4. Route traffic from on-premises → AWS resources over dedicated link

---

# 04. Connection Types

### 4.1 Dedicated Connection
- Physical 1 Gbps or 10 Gbps connection  
- Single-customer port at AWS Direct Connect location  
- High throughput, predictable performance

### 4.2 Hosted Connection
- Provided by **AWS Direct Connect Partner**  
- Speeds from 50 Mbps to 10 Gbps  
- Easier to provision, less setup complexity

---

# 05. Use Cases

- Migrate **large datasets** to AWS  
- Connect **on-premises apps to cloud services**  
- Hybrid cloud architectures → **low-latency access**  
- Financial, gaming, or healthcare workloads needing **predictable performance**  
- Backup and disaster recovery over **private links**

---

# 06. Best Practices

- Use **redundant connections** for HA  
- Monitor with **CloudWatch metrics**  
- Use **Link Aggregation Groups (LAGs)** for increased bandwidth  
- Plan for **multi-region connectivity** if needed  
- Use **VLAN segmentation** for private vs public traffic

---

# 07. Interview / Exam Notes

- Direct Connect → **dedicated private network connection**  
- Supports **Private and Public Virtual Interfaces**  
- Bypasses public internet → **secure and consistent**  
- Dedicated vs Hosted → tradeoff between speed/control and simplicity  
- Often used for **hybrid cloud architectures**  

---

# 08. Diagram Idea

```text
[On-Premises Data Center]
        |
   [Direct Connect Router]
        |
   -------------------------
   |                       |
[Private VIF]          [Public VIF]
   |                       |
[VPC]                  [AWS Public Services]