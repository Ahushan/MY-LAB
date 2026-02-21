# 06_neptune.md

# 01. What is Amazon Neptune

**Amazon Neptune** is a fully managed **graph database service** designed for **highly connected datasets**.  

- Supports **property graph (Gremlin) and RDF (SPARQL) models**  
- Fully managed → handles **scaling, backups, patching, and replication**  
- Optimized for **low-latency queries on complex relationships**  

---

# 02. Key Features

- **High Performance** → Optimized for graph queries  
- **Fully Managed** → No server management, automated backups  
- **Multi-AZ Replication** → High availability and failover  
- **ACID Transactions** → Data consistency and reliability  
- **Security** → IAM, VPC, KMS encryption, SSL in transit  
- **Integration** → Works with analytics, ML, and visualization tools  

---

# 03. How Neptune Works

1. Create a **Neptune cluster** with **primary instance + read replicas**  
2. Load data as **nodes and edges** in **property graph or RDF format**  
3. Query using **Gremlin (graph traversal) or SPARQL**  
4. Automatic **replication across AZs** ensures high availability  
5. Use read replicas for **scaling read-heavy graph queries**  

---

# 04. Deployment Options

### 4.1 Single-AZ
- Cluster in one AZ  
- Cost-effective, no automatic failover  

### 4.2 Multi-AZ
- Primary + replicas in multiple AZs  
- Automatic failover for **high availability**  

---

# 05. Use Cases

- Social networks → modeling **friendships, followers, recommendations**  
- Fraud detection → detect **complex patterns and anomalies**  
- Knowledge graphs → for search and discovery  
- Recommendation engines → personalized content or products  
- Network and IT operations → dependency mapping  

---

# 06. Best Practices

- Deploy **multi-AZ clusters** for production  
- Use **read replicas** for read-intensive workloads  
- Enable **continuous backups** for disaster recovery  
- Monitor queries and cluster health via **CloudWatch**  
- Use **parameter groups** for tuning performance  

---

# 07. Interview / Exam Notes

- Neptune → fully managed **graph database**  
- Supports **property graph (Gremlin) and RDF (SPARQL)**  
- Multi-AZ → high availability, failover  
- Read replicas → improve read scalability  
- Optimized for **connected datasets and relationship queries**  
- Fully managed → no server provisioning  

---

# 08. Diagram Idea

```text
        [Application]
             |
       [Neptune Cluster]
     -------------------------
     |           |           |
 [Primary]  [Read Replica1] [Read Replica2]
     |           |           |
   Multi-AZ Replication & Failover
   Nodes & Edges Storage