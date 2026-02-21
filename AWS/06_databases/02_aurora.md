# 02_aurora.md

# 01. What is Amazon Aurora

**Amazon Aurora** is a **high-performance, fully managed relational database** compatible with MySQL and PostgreSQL.  

- Provides **up to 5x performance** of standard MySQL and **3x PostgreSQL**  
- Fully managed → automated backups, patching, and replication  
- Designed for **high availability, durability, and security**  

---

# 02. Key Features

- **High Performance** → Optimized storage and caching  
- **Fault-Tolerant & Highly Available** → Multi-AZ deployment  
- **Read Replicas** → Up to 15 replicas for scaling reads  
- **Global Database** → Multi-region read and disaster recovery  
- **Serverless Option** → Aurora Serverless for on-demand scaling  

---

# 03. How Aurora Works

1. Database cluster consists of **Primary instance + Replicas**  
2. Storage is **automatically replicated** across **3 AZs**  
3. Failover → automatic to **read replica** in case of primary failure  
4. Connect applications via **cluster endpoint**  
5. Scale **read and write** workloads dynamically  

---

# 04. Deployment Options

### 4.1 Aurora Standard
- Fixed instance sizes  
- Multi-AZ replication for high availability  

### 4.2 Aurora Serverless
- Automatically **scales compute capacity** based on workload  
- Ideal for **variable or unpredictable workloads**  
- Pay **only for the resources used**  

---

# 05. Use Cases

- High-performance web and mobile apps  
- E-commerce platforms with heavy database load  
- Multi-region apps needing **disaster recovery**  
- Variable workloads → use Aurora Serverless  
- Applications requiring **MySQL or PostgreSQL compatibility**  

---

# 06. Best Practices

- Use **Multi-AZ** for production workloads  
- Enable **backups and snapshots** for recovery  
- Use **read replicas** for scaling read-heavy traffic  
- Monitor performance metrics via **CloudWatch**  
- Consider **Aurora Serverless** for unpredictable workloads  

---

# 07. Interview / Exam Notes

- Aurora → **high-performance managed relational DB**  
- Compatible with **MySQL and PostgreSQL**  
- Multi-AZ replication → high availability  
- Read replicas → scale read-heavy workloads  
- Aurora Serverless → automatic scaling, pay-per-use  
- Storage automatically replicated → 6 copies across 3 AZs  

---

# 08. Diagram Idea

```text
      [Application]
           |
     [Aurora Cluster Endpoint]
     -------------------------
     |           |           |
 [Primary DB] [Replica1] [Replica2]
     |           |           |
  Multi-AZ   Storage  Replication