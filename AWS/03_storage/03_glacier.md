# 03_glacier.md

# 01. What is Glacier

Amazon **Glacier** is a low-cost, secure, durable **archival storage service** in AWS.  
It is designed for **long-term data storage** where retrieval times of minutes to hours are acceptable.

- **Object storage** → Stores files as objects
- **Durability:** 11 9's
- **Use Case:** Archival, compliance, backup
- **Integration:** S3, Lambda, CloudWatch, Backup services

---

# 02. Glacier vs Glacier Deep Archive

| Feature                 | Glacier                   | Glacier Deep Archive       |
|-------------------------|--------------------------|----------------------------|
| Retrieval Time          | Minutes to hours         | Up to 48 hours            |
| Cost                    | Low                      | Lowest                    |
| Use Case                | Short-term archival      | Long-term archival        |
| Example                 | Logs, old project files  | Regulatory compliance     |

---

# 03. Durability & Availability

- **Durability:** 11 9's  
- **Availability:** Varies by retrieval tier (not immediate)  
- Data is redundantly stored across multiple AZs (Availability Zones)

---

# 04. Retrieval Tiers

### 4.1 Expedited
- Retrieval in 1–5 minutes  
- Best for urgent access

### 4.2 Standard
- Retrieval in 3–5 hours  
- Most common archival retrieval

### 4.3 Bulk
- Retrieval in 5–12 hours  
- Cheapest option for large amounts of data

---

# 05. Pricing Model

- **Storage cost:** Very low per GB per month  
- **Retrieval cost:** Depends on tier and data size  
- **Requests cost:** PUT, GET, LIST  
- Example: Deep Archive is cheapest storage but takes longer to retrieve

---

# 06. Use Cases

- Compliance data storage  
- Long-term backups  
- Media archives  
- Log archiving  
- Historical project data

---

# 07. Example Services

- **S3:** Move objects to Glacier via lifecycle policies  
- **AWS Backup:** Store snapshots in Glacier  
- **Lambda:** Process events and archive old data  
- **CloudWatch Logs:** Move old logs to Glacier

---

# 08. Best Practices

- Use **lifecycle policies** for automated archival  
- Choose **retrieval tier** based on urgency  
- Avoid frequent access; Glacier is for archival  
- Enable **encryption** for sensitive data  
- Monitor **storage and retrieval costs**

---

# 09. Interview / Exam Notes

- Glacier is **archival storage** (not for frequent access)  
- Retrieval times vary by **tier** (Expedited, Standard, Bulk)  
- Deep Archive is **lowest-cost**, long-term storage  
- Integrates with S3 lifecycle policies  
- Durable (11 9’s), multi-AZ storage  

---

# 10. Diagram Idea

```text
[S3 Bucket] --> Lifecycle Policy --> [Glacier / Deep Archive]
                   |
                   |--> Lambda Trigger for Processing
                   |--> Backup / Compliance Storage