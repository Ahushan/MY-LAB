# 05_documentdb.md

# 01. What is Amazon DocumentDB

**Amazon DocumentDB** is a fully managed **NoSQL document database** service that is **MongoDB-compatible**.  

- Designed for **JSON-like document data**  
- Fully managed → handles **scaling, backups, patching, and monitoring**  
- Ideal for **web, mobile, and content management applications**  

---

# 02. Key Features

- **MongoDB-Compatible** → Easy migration from MongoDB  
- **Fully Managed** → Automatic backups, patching, and maintenance  
- **Scalable** → Read replicas and compute scaling  
- **High Availability** → Multi-AZ deployments with automatic failover  
- **Security** → VPC, IAM, KMS encryption at rest, SSL in transit  
- **Monitoring** → Integration with CloudWatch  

---

# 03. How DocumentDB Works

1. Create a **cluster** with **primary instance + optional read replicas**  
2. Store data in **JSON-like documents**  
3. Applications connect using **MongoDB drivers**  
4. Automatic **replication and failover** across AZs  
5. Use **read replicas** for scaling read-heavy workloads  

---

# 04. Deployment Options

### 4.1 Single-AZ
- Primary instance in one AZ  
- Less expensive, no automatic failover  

### 4.2 Multi-AZ
- Primary instance + replicas in multiple AZs  
- Automatic failover for high availability  

---

# 05. Use Cases

- Content management systems (CMS)  
- Web and mobile applications storing **JSON documents**  
- Real-time analytics on document-based data  
- Applications migrating from **MongoDB**  
- Event-driven applications using **change streams**  

---

# 06. Best Practices

- Deploy **multi-AZ clusters** for production  
- Use **read replicas** for scaling read-heavy traffic  
- Enable **continuous backups** for recovery  
- Monitor cluster health via **CloudWatch**  
- Use **parameter groups** to tune cluster settings  

---

# 07. Interview / Exam Notes

- DocumentDB → fully managed **MongoDB-compatible NoSQL DB**  
- Multi-AZ → high availability and failover  
- Read replicas → improve read performance  
- Supports **JSON document storage**  
- Integrates with **VPC, IAM, KMS, and CloudWatch**  

---

# 08. Diagram Idea

```text
       [Application]
            |
      [DocumentDB Cluster]
     ------------------------
     |          |           |
[Primary]   [Read Replica1] [Read Replica2]
     |          |           |
  Multi-AZ Replication & Failover