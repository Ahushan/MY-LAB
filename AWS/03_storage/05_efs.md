# 05_efs.md

# 01. What is EFS

Amazon **Elastic File System (EFS)** is a fully-managed **NFS-based file storage** service for AWS cloud.  
It provides **scalable, shared file storage** for multiple EC2 instances and serverless workloads.

- **File storage** → Accessed via standard file system interface (NFS)  
- **Serverless & scalable** → Automatically grows or shrinks as you add/remove files  
- **Durable & available** → Stored across multiple Availability Zones  
- **Integration** → EC2, Lambda, ECS, EKS

---

# 02. File Storage Overview

- Provides **shared storage** accessible from multiple instances simultaneously  
- Supports **Linux-based file systems** (NFSv4.1, NFSv4.0)  
- Ideal for **content management, web servers, and shared applications**

---

# 03. Performance Modes

### 3.1 General Purpose
- Low latency and higher IOPS  
- Best for **most workloads**  
- Default performance mode

### 3.2 Max I/O
- Designed for **large-scale, high throughput workloads**  
- Higher latency than General Purpose  
- Example: Big data analytics, media processing

---

# 04. Throughput Modes

### 4.1 Bursting Throughput
- Default mode  
- Throughput scales with storage size  
- Suitable for most workloads

### 4.2 Provisioned Throughput
- Fixed throughput independent of storage size  
- Ideal for **high-performance workloads** with predictable throughput needs

---

# 05. Scalability & Availability

- **Automatic scaling:** EFS grows and shrinks automatically  
- **Highly available:** Data stored across multiple AZs  
- **Durable:** Designed for 99.999999999% (11 9’s) durability  
- **Elastic:** No need to provision capacity upfront

---

# 06. Use Cases

- Shared file storage for multiple EC2 instances  
- Content management systems  
- Web serving & CMS  
- Big Data and analytics workloads  
- Media storage and processing  
- Containerized applications (ECS/EKS)

---

# 07. Difference: EFS vs S3 vs EBS

| Feature          | EFS                     | S3                     | EBS                     |
|------------------|------------------------|-----------------------|------------------------|
| Storage Type     | File                   | Object                | Block                   |
| Access           | EC2, Lambda, ECS/EKS   | Internet / SDK        | EC2 only               |
| Durability       | 11 9's                 | 11 9's                | 99.999%                |
| Scalability      | Virtually unlimited    | Virtually unlimited   | Limited by volume      |
| Use Case         | Shared storage, apps   | Backup, archival      | OS disks, databases     |

---

# 08. Example Services

- **EC2:** Shared file system for multiple instances  
- **Lambda:** Read/write shared files for serverless apps  
- **ECS / EKS:** Containerized workloads requiring shared storage  
- **Backup Solutions:** Store application data with high durability

---

# 09. Best Practices

- Use **General Purpose mode** unless high throughput required  
- Enable **encryption at rest and in transit**  
- Apply **least privilege IAM access**  
- Monitor **throughput and latency metrics** via CloudWatch  
- Use **provisioned throughput** only for predictable high-performance workloads

---

# 10. Interview / Exam Notes

- EFS is **NFS-based shared file storage**  
- Scales automatically with data  
- Highly durable and available across AZs  
- Integrated with EC2, Lambda, ECS/EKS  
- Performance and throughput modes help optimize cost and speed

---

# 11. Diagram Idea

```text
[EC2 Instance 1]  \
                   \
[EC2 Instance 2] ----> [EFS File System] --> [Backup / CloudWatch]
                   /
[Lambda Function] /