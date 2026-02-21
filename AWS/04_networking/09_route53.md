# 09_route53.md

# 01. What is Amazon Route 53

**Amazon Route 53** is a highly available and scalable **Domain Name System (DNS) web service**.  

- Translates **domain names to IP addresses**  
- Routes users to **applications hosted on AWS or elsewhere**  
- Supports **domain registration, DNS routing, and health checks**

---

# 02. Hosted Zones

- **Hosted Zone** → container for DNS records for a domain  
- Types:  
  - **Public Hosted Zone** → Domain accessible over internet  
  - **Private Hosted Zone** → Domain accessible only within VPC(s)  
- Each hosted zone has a **unique set of DNS records**

---

# 03. Record Types

### 3.1 A Record
- Maps a domain name to an **IPv4 address**  

### 3.2 AAAA Record
- Maps a domain name to an **IPv6 address**  

### 3.3 CNAME
- Maps a domain name to **another domain name**  

### 3.4 MX
- Mail Exchange record → used for **email routing**  

### 3.5 TXT
- Text record → used for **verification, SPF, DKIM**  

### 3.6 SRV
- Service locator record → used for **specific services like SIP, LDAP**  

---

# 04. Routing Policies

### 4.1 Simple Routing
- Single resource for domain  
- No health checks required  

### 4.2 Weighted Routing
- Route traffic across **multiple resources** with **assigned weights**  
- Example: 70% traffic → Server A, 30% → Server B  

### 4.3 Latency-Based Routing
- Direct users to **lowest-latency AWS region**  

### 4.4 Failover Routing
- Redirect traffic to **secondary resource** if primary fails  
- Works with **health checks**  

### 4.5 Geolocation Routing
- Route traffic based on **user’s geographic location**  
- Example: EU users → EU servers, US users → US servers  

---

# 05. Health Checks

- Monitor the **availability and health** of resources  
- Integrates with **failover and weighted routing**  
- Sends traffic only to **healthy endpoints**

---

# 06. Use Cases

- Route users to **web applications hosted on AWS or on-premises**  
- Implement **high availability and disaster recovery** with failover routing  
- Distribute traffic globally using **latency or geolocation routing**  
- Verify domain ownership using **TXT records for AWS services**  

---

# 07. Best Practices

- Use **health checks** for critical endpoints  
- Use **alias records** for AWS resources like ALB, CloudFront, S3  
- Combine **routing policies** for better global availability  
- Keep DNS records **up-to-date** to avoid downtime  
- Monitor using **CloudWatch metrics**  

---

# 08. Interview / Exam Notes

- Route 53 → DNS service + domain registration  
- Supports **public and private hosted zones**  
- Record types → A, AAAA, CNAME, MX, TXT, SRV  
- Routing policies → Simple, Weighted, Latency, Failover, Geolocation  
- Health checks integrate with **routing decisions**  

---

# 09. Diagram Idea

```text
[User Request] 
      |
   [Route 53 DNS]
      |
-----------------------------
|           |               |
[Server A] [Server B]    [Server C]
      | (weighted, failover, latency, or geolocation routing)