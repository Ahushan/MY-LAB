# 03_route_tables.md

# 01. What is a Route Table

A **Route Table** is a set of rules, called **routes**, that determines **how network traffic is directed** within a VPC.  

- Each **subnet is associated** with a route table  
- Routes define **destination IP ranges** and **targets** (IGW, NAT, peering, etc.)  
- Essential for **connectivity inside VPC and to external networks**

---

# 02. Main vs Custom Route Tables

### 2.1 Main Route Table
- Automatically created when a VPC is created  
- All subnets default to this table unless explicitly associated with a custom route table  
- Can be edited, but only **one main route table per VPC**

### 2.2 Custom Route Table
- Created by the user for **specific routing needs**  
- Can be associated with **one or more subnets**  
- Useful for **private subnets, peering, or hybrid connections**

---

# 03. Routes & Targets

- Each **route** has:  
  - **Destination:** CIDR block of the traffic (e.g., 0.0.0.0/0)  
  - **Target:** Where to send the traffic (IGW, NAT Gateway, VPC Peering, EC2 instance, etc.)  

**Examples:**
- 0.0.0.0/0 → IGW (internet access for public subnet)  
- 10.0.0.0/16 → local (traffic within VPC)  
- 0.0.0.0/0 → NAT Gateway (private subnet internet access)

---

# 04. Associations with Subnets

- Each subnet **must be associated** with a route table  
- Determines **how the subnet routes outbound traffic**  
- Can override **main route table** using custom association

---

# 05. Use Cases

- Public subnet → route 0.0.0.0/0 → IGW  
- Private subnet → route 0.0.0.0/0 → NAT Gateway  
- Multi-VPC architecture → route tables for **peering or VPN**  
- Hybrid cloud → route tables for **Direct Connect or VPN** traffic

---

# 06. Best Practices

- Keep **main route table simple**  
- Use **custom route tables** for private subnets  
- Avoid **overlapping CIDR blocks**  
- Document all route tables for **audit and troubleshooting**  
- Use **VPC Flow Logs** to monitor routing issues

---

# 07. Interview / Exam Notes

- Route table **directs network traffic**  
- Each subnet is associated with **exactly one route table**  
- **Main vs Custom:** main is default, custom for special routing  
- Targets can be **IGW, NAT, peering, VPC endpoints, or EC2**  
- Critical for **public vs private subnet connectivity**

---

# 08. Diagram Idea

```text
[Public Subnet]
   0.0.0.0/0 --> IGW
   10.0.0.0/16 --> local

[Private Subnet]
   0.0.0.0/0 --> NAT Gateway
   10.0.0.0/16 --> local