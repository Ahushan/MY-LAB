# 01_rds.md

# 01. What is Amazon RDS

**Amazon RDS (Relational Database Service)** is a **managed relational database service** that makes it easy to set up, operate, and scale databases in the cloud.  

- Supports multiple database engines: **MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, and Amazon Aurora**  
- Managed service → handles **backups, patching, monitoring, and scaling**  
- Provides **high availability and security**  

---

# 02. Key Features

- **Automated Backups & Snapshots** → Data protection and recovery  
- **Multi-AZ Deployment** → High availability and failover  
- **Read Replicas** → Scale read-heavy workloads  
- **Monitoring** → Integration with CloudWatch metrics  
- **Security** → IAM, VPC, encryption at rest and in transit  

---

# 03. How RDS Works

1. Launch a **DB instance** in a **VPC**  
2. Choose **database engine, instance type, storage, and network settings**  
3. RDS handles **provisioning, patching, backups, and replication**  
4. Connect applications using **endpoint URL**  
5. Scale storage and compute as required  

---

# 04. Deployment Options

### 4.1 Single-AZ
- Database runs in **one Availability Zone**  
- Lower cost, no automatic failover  

### 4.2 Multi-AZ
- Primary DB in one AZ, standby in another  
- Automatic **failover for high availability**  

### 4.3 Read Replicas
- Copy of the database for **read scalability**  
- Can be in the same or different region  

---

# 05. Use Cases

- Web and mobile applications with **relational data**  
- E-commerce platforms needing **high availability**  
- Analytics workloads with **read replicas**  
- Multi-region applications requiring **disaster recovery**  

---

# 06. Best Practices

- Use **Multi-AZ deployment** for production workloads  
- Enable **automatic backups and snapshots**  
- Monitor **CPU, memory, and storage** via CloudWatch  
- Encrypt sensitive data at **rest and in transit**  
- Use **parameter groups** to tune database settings  

---

# 07. Interview / Exam Notes

- RDS → **managed relational database service**  
- Supports multiple engines → MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, Aurora  
- Multi-AZ → high availability, automatic failover  
- Read replicas → improve read performance  
- Handles **patching, backup, monitoring, and scaling** automatically  

---

# 08. Diagram Idea

```text
       [Application]
            |
        [RDS Endpoint]
     ----------------------
     |      |       |
  [DB-AZ1] [DB-AZ2] [Read Replicas]