# 07_elasticache.md

# 01. What is Amazon ElastiCache

**Amazon ElastiCache** is a fully managed **in-memory caching service** that improves **application performance** by allowing fast retrieval of frequently accessed data.  

- Supports **Redis** and **Memcached** engines  
- Reduces latency → microseconds for reads/writes  
- Fully managed → handles **scaling, patching, backup, and monitoring**  

---

# 02. Key Features

- **High Performance** → Sub-millisecond latency  
- **Fully Managed** → Automatic failover, backups, patching  
- **Scalable** → Horizontal and vertical scaling  
- **Multi-AZ & Replication** → High availability  
- **Security** → VPC, IAM, encryption at rest & in transit  
- **Integration** → Works with **RDS, DynamoDB, EC2, Lambda**  

---

# 03. How ElastiCache Works

1. Choose **engine** (Redis or Memcached)  
2. Create a **cache cluster** with nodes  
3. Application connects to cache using **endpoint**  
4. Frequently accessed data stored **in-memory** for faster access  
5. Optional: use **replication groups** for high availability and failover  

---

# 04. Cache Engines

### 4.1 Redis
- In-memory key-value store  
- Supports **persistence, replication, transactions, pub/sub**  
- Ideal for **leaderboards, session stores, real-time analytics**  

### 4.2 Memcached
- Simple in-memory caching  
- High throughput → horizontally scalable  
- Ideal for **temporary cache, session caching**  

---

# 05. Use Cases

- Caching database queries → reduce DB load  
- Session storage for **web applications**  
- Real-time analytics dashboards  
- Leaderboards and gaming applications  
- Pub/Sub messaging and queuing  

---

# 06. Best Practices

- Use **Redis** for complex use cases (persistence, transactions)  
- Use **Memcached** for simple caching  
- Deploy **multi-AZ replication** for production  
- Set **appropriate eviction policies** (LRU, TTL)  
- Monitor cache **hit/miss rates, memory usage** via CloudWatch  

---

# 07. Interview / Exam Notes

- ElastiCache → fully managed **in-memory caching**  
- Engines → **Redis** (feature-rich), **Memcached** (simple, scalable)  
- Reduces **latency and database load**  
- Supports **multi-AZ, replication, failover**  
- Integrates with **RDS, DynamoDB, EC2, Lambda**  

---

# 08. Diagram Idea

```text
       [Application]
            |
        [ElastiCache Cluster]
       /           \
    [Node1]       [Node2]
      |             |
  Redis/Memcached   Redis/Memcached
      |             |
  In-Memory Data Storage