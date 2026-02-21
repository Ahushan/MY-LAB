# 03_dynamodb.md

# 01. What is Amazon DynamoDB

**Amazon DynamoDB** is a fully managed **NoSQL database** service that provides **fast and predictable performance** with **scalability**.  

- Key-value and document data model  
- Serverless → automatically scales throughput and storage  
- Fully managed → no server provisioning or patching  

---

# 02. Key Features

- **High Performance** → single-digit millisecond latency  
- **Automatic Scaling** → handles millions of requests per second  
- **Global Tables** → multi-region, multi-master replication  
- **Fine-Grained Access Control** → IAM-based permissions  
- **Backup & Restore** → on-demand and continuous backups  
- **Streams** → capture item-level changes for event-driven applications  

---

# 03. How DynamoDB Works

1. Create a **table** with **primary key** (partition key / optional sort key)  
2. Configure **provisioned or on-demand capacity**  
3. Write and read operations occur via **DynamoDB API**  
4. Use **DynamoDB Streams** for triggering Lambda or ETL  
5. Tables automatically scale to **handle traffic and storage growth**  

---

# 04. Capacity Modes

### 4.1 Provisioned Capacity
- Define **read and write throughput**  
- Auto-scaling optional  
- Best for **predictable workloads**  

### 4.2 On-Demand Capacity
- Automatically adjusts capacity  
- Pay-per-request  
- Ideal for **unpredictable or variable workloads**  

---

# 05. Use Cases

- Web and mobile apps requiring **low latency**  
- Real-time bidding, gaming, IoT data ingestion  
- Event-driven architectures → Lambda triggers from **DynamoDB Streams**  
- Multi-region apps with **Global Tables**  
- Serverless applications → integrate with **API Gateway, Lambda**  

---

# 06. Best Practices

- Choose **primary key wisely** to avoid hot partitions  
- Use **Global Secondary Index (GSI)** for flexible queries  
- Enable **Point-in-Time Recovery (PITR)** for backup  
- Monitor **consumed capacity and throttling** using CloudWatch  
- Use **DAX (DynamoDB Accelerator)** for in-memory caching  

---

# 07. Interview / Exam Notes

- DynamoDB → **serverless, fully managed NoSQL DB**  
- Data model → key-value / document  
- Capacity modes → provisioned or on-demand  
- Supports **streams, global tables, and backup/restore**  
- Integrates with **Lambda, API Gateway, and DAX**  
- Automatically scales with **traffic and storage**  

---

# 08. Diagram Idea

```text
       [Application]
            |
       [DynamoDB Table]
       /       |       \
   [Item1]  [Item2]  [Item3]
       |
 [Streams → Lambda / Analytics]