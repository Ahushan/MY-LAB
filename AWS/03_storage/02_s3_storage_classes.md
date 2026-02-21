# 02_s3_storage_classes.md

# 01. Overview

Amazon S3 offers multiple **storage classes** to optimize **cost, durability, and availability** based on how frequently data is accessed.  
Choosing the right storage class helps reduce costs while maintaining performance.

---

# 02. S3 Standard

- **Durability:** 11 9's  
- **Availability:** 99.99%  
- **Use Case:** Frequently accessed data  
- **Cost:** Higher than IA and Glacier  
- **Example:** Web hosting, active application data

---

# 03. S3 Intelligent-Tiering

- **Durability:** 11 9's  
- **Availability:** 99.9%–99.99%  
- **Use Case:** Unknown or changing access patterns  
- **Cost:** Automatically moves objects between frequent & infrequent access tiers  
- **Example:** Analytics data, unpredictable workloads

---

# 04. S3 Standard-Infrequent Access (IA)

- **Durability:** 11 9's  
- **Availability:** 99.9%  
- **Use Case:** Less frequently accessed data  
- **Cost:** Lower storage cost, higher retrieval cost  
- **Example:** Backup data, long-term reports

---

# 05. S3 One Zone-Infrequent Access (One Zone-IA)

- **Durability:** 11 9's (in one AZ)  
- **Availability:** 99.5%  
- **Use Case:** Cheaper option for infrequent access, non-critical data  
- **Example:** Secondary backups, easily reproducible data

---

# 06. S3 Glacier

- **Durability:** 11 9's  
- **Availability:** N/A  
- **Use Case:** Archival storage with retrieval in minutes to hours  
- **Cost:** Very low storage cost, higher retrieval cost  
- **Retrieval Options:**  
  - Expedited (1–5 mins)  
  - Standard (3–5 hours)  
  - Bulk (5–12 hours)  
- **Example:** Compliance archives, old project data

---

# 07. S3 Glacier Deep Archive

- **Durability:** 11 9's  
- **Availability:** N/A  
- **Use Case:** Long-term archival (years)  
- **Cost:** Cheapest S3 storage option  
- **Retrieval Options:**  
  - Standard (12 hours)  
  - Bulk (48 hours)  
- **Example:** Regulatory data retention, rarely accessed records

---

# 08. Lifecycle Policies

- Automatically **transition objects** between storage classes  
- Reduces cost and manages data lifecycle efficiently  

**Sample Lifecycle Rule:**
```json
{
  "Rules": [
    {
      "ID": "MoveOldFilesToGlacier",
      "Prefix": "",
      "Status": "Enabled",
      "Transitions": [
        {
          "Days": 180,
          "StorageClass": "GLACIER"
        }
      ]
    }
  ]
}