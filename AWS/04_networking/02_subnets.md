# 02_subnets.md

# 01. What is a Subnet

A **Subnet** (subnetwork) is a **segment of a VPC’s IP address range** where you can place AWS resources.  
It helps **organize and control network access** within a VPC.

- Defines a **range of IP addresses** in the VPC  
- Can be **public, private, or isolated**  
- Associated with **route tables, NACLs, and security groups**

---

# 02. Types of Subnets

### 2.1 Public Subnet
- Has **direct access to the internet** via an Internet Gateway  
- Typically hosts **web servers, load balancers, or NAT gateways**

### 2.2 Private Subnet
- **No direct internet access**  
- Uses **NAT Gateway** to access the internet  
- Hosts **application servers, databases, or internal services**

### 2.3 Isolated Subnet
- **No internet or NAT access**  
- Fully isolated for highly secure workloads  
- Example: Sensitive data storage, compliance workloads

---

# 03. CIDR Blocks

- Subnets are defined by **CIDR notation** (e.g., 10.0.1.0/24)  
- Must fit within the VPC CIDR range  
- Determines the **number of available IP addresses**  
  - Example: /24 → 256 IPs (minus AWS reserved addresses)

---

# 04. Route Table Associations

- Each subnet is **associated with a route table**  
- Determines **how traffic is routed**:  
  - To other subnets  
  - To the internet (via IGW)  
  - To on-premises networks (via VPN or Direct Connect)  
- Can override the **main route table** by associating a custom one

---

# 05. Use Cases

- Separate **public-facing and private resources**  
- Multi-tier applications (web → app → database)  
- Highly secure workloads in **isolated subnets**  
- Organize **resources across AZs** for high availability

---

# 06. Best Practices

- Use **different subnets per AZ** for redundancy  
- Keep **public and private subnets separate**  
- Plan **CIDR blocks** carefully to avoid IP conflicts  
- Use **route tables and NACLs** to enforce traffic rules  
- Monitor with **VPC Flow Logs** for troubleshooting

---

# 07. Interview / Exam Notes

- Subnet is a **segment of a VPC**  
- **Public subnet → IGW access**  
- **Private subnet → NAT Gateway access**  
- **Isolated subnet → no internet**  
- Associated with **route tables and NACLs**  
- IP range defined using **CIDR notation**

---

# 08. Diagram Idea

```text
          [VPC CIDR: 10.0.0.0/16]
                  |
        ------------------------
        |                      |
   [Public Subnet]         [Private Subnet]
   10.0.1.0/24            10.0.2.0/24
        |                      |
    EC2 Web Servers       EC2 App Servers
        |                      |
     Internet Gateway        NAT Gateway