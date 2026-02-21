# 04_internet_gateway.md

# 01. What is an Internet Gateway (IGW)

An **Internet Gateway** is a **horizontally scaled, redundant, and highly available VPC component** that allows **communication between instances in a VPC and the internet**.  

- Enables **internet access** for EC2 instances in **public subnets**  
- Managed by AWS, **no server provisioning required**  
- Supports **IPv4 and IPv6 traffic**

---

# 02. How it Works

1. Attach the **IGW to a VPC**  
2. Update the **route table** of public subnets:  
   - Destination: `0.0.0.0/0` (IPv4) → Target: IGW  
   - Destination: `::/0` (IPv6) → Target: IGW  
3. Launch **public EC2 instances** with a public IP  
4. Traffic from instances to internet goes through IGW  
5. Incoming traffic routed to public IP reaches instance  

---

# 03. Attachments to VPC

- A **VPC can have only one IGW** attached at a time  
- Must be **detached** before deleting the IGW  
- Supports multiple subnets in the same VPC

---

# 04. Use Cases

- Public-facing web servers (e.g., EC2 + ALB)  
- Application servers in public subnets requiring internet access  
- NAT Gateway / Bastion host access for private subnet instances  
- Hybrid architecture testing requiring direct internet traffic

---

# 05. Best Practices

- Attach IGW only to **public subnets**  
- Use **security groups and NACLs** to control traffic  
- Monitor internet traffic using **VPC Flow Logs**  
- Use **Elastic IPs** for consistent public IP addressing  
- Combine IGW with **NAT Gateway** for private subnet internet needs

---

# 06. Interview / Exam Notes

- IGW enables **internet connectivity** for public subnets  
- Horizontally scaled and **highly available**  
- Must attach to **VPC** and update **route table**  
- Private subnets do **not use IGW directly**  
- Combined with NAT Gateway to provide **private subnet outbound access**

---

# 07. Diagram Idea

```text
             [Internet]
                 |
           [Internet Gateway]
                 |
           -----------------
           |  Public Subnet |
           |----------------|
           |  EC2 Web Server|
           -----------------