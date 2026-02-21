# 01_vpc.md

# 01. What is VPC

Amazon **Virtual Private Cloud (VPC)** allows you to provision a **logically isolated section of the AWS Cloud** where you can launch AWS resources in a **virtual network** that you define.

- **Private network** → Fully controlled IP addressing, subnets, and routing  
- **Secure** → Use security groups and NACLs  
- **Integration** → Works with EC2, Lambda, RDS, EFS, etc.

---

# 02. Components of a VPC

### 2.1 Subnets
- Segments of a VPC’s IP address range  
- Can be public, private, or isolated  
- Used to organize resources based on access needs

### 2.2 Route Tables
- Define how traffic is directed within VPC  
- Can associate multiple subnets with a route table

### 2.3 Internet Gateway (IGW)
- Enables **internet access** for public subnets  
- Managed AWS component attached to VPC

### 2.4 NAT Gateway
- Provides **internet access to private subnets** without exposing them  
- Highly available and managed by AWS

### 2.5 Network ACLs
- **Stateless firewall** at the subnet level  
- Can **allow or deny traffic** based on rules

### 2.6 Security Groups
- **Stateful firewall** at the instance level  
- Controls inbound and outbound traffic

---

# 03. VPC Peering

- Connects **two VPCs** privately  
- Can be **in the same or different regions** (Inter-Region Peering)  
- Enables routing **without going through the internet**  
- **Use Case:** Multi-account architectures, shared services

---

# 04. VPN Connection

- Securely connect **on-premises network to VPC**  
- Supports **IPSec VPN**  
- Can use **hardware or software VPN endpoints**  
- **Use Case:** Hybrid cloud architecture

---

# 05. PrivateLink

- Provides **private connectivity to AWS services** without exposing traffic to the internet  
- Uses **VPC endpoints**  
- **Example Services:** S3, DynamoDB, API Gateway

---

# 06. Use Cases

- Launch EC2, RDS, Lambda in **isolated networks**  
- **Secure multi-tier architectures**  
- **Hybrid cloud connections**  
- **Shared services across accounts** using VPC Peering

---

# 07. Best Practices

- Design **subnet and IP addressing** carefully  
- Use **security groups and NACLs** for layered security  
- Separate **public and private subnets**  
- Use **VPC Flow Logs** for monitoring  
- Plan for **multi-AZ high availability**

---

# 08. Interview / Exam Notes

- VPC is **logical isolation** in AWS Cloud  
- Subnets can be **public, private, or isolated**  
- Security groups → **stateful**, NACLs → **stateless**  
- Internet Gateway → public subnet access  
- NAT Gateway → private subnet internet access  
- Supports **VPC Peering, VPN, PrivateLink**

---

# 09. Diagram Idea

```text
           [Internet]
                |
           [Internet Gateway]
                |
           -----------------
           |  Public Subnet |
           |----------------|
           |  EC2, ALB      |
           -----------------
                 |
          -----------------
          | Private Subnet |
          |----------------|
          | EC2, RDS, EFS  |
          -----------------
                 |
           [NAT Gateway]
                 |
           [On-Prem VPN]