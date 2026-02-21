# 04_ebs.md

# 01. What is EBS

Amazon **Elastic Block Store (EBS)** provides **persistent block storage** for EC2 instances.  
It is like a virtual hard disk attached to EC2, used for storing OS, databases, and applications.

- **Block storage** → Stores data in fixed-size blocks  
- **Persistent** → Data persists even if EC2 instance stops  
- **High performance** → SSD and HDD options  
- **Integration** → Works directly with EC2

---

# 02. Block Storage Overview

- Provides **raw storage volumes**  
- Each volume can be attached to a single EC2 instance (except for Multi-Attach volumes)  
- Can be formatted with a file system like ext4 or NTFS  
- Supports **snapshots** for backup

---

# 03. Volume Types

### 3.1 General Purpose SSD (gp3)
- Balanced price/performance  
- Use for boot volumes and general workloads  
- Can provision IOPS and throughput independently

### 3.2 Provisioned IOPS SSD (io2)
- High performance for I/O intensive workloads  
- Guaranteed IOPS  
- Example: Databases, critical business apps

### 3.3 Throughput Optimized HDD (st1)
- Low-cost, high throughput HDD  
- Ideal for large sequential workloads  
- Example: Big Data, log processing

### 3.4 Cold HDD (sc1)
- Cheapest HDD option  
- Low throughput, infrequently accessed  
- Example: Archival storage, cold data

---

# 04. Features

### 4.1 Snapshots
- Point-in-time backups of EBS volumes  
- Stored in S3, can be used to restore or replicate volumes

### 4.2 Encryption
- At-rest encryption using AWS KMS  
- Encrypted snapshots and volumes

### 4.3 Resizing & Performance
- Volumes can be **resized dynamically**  
- IOPS and throughput can be **increased without downtime**

---

# 05. Pricing Model

- **By volume type:** gp3, io2, st1, sc1  
- **Storage cost per GB per month**  
- **Provisioned IOPS** (io2/gp3) and throughput may add extra cost  
- **Snapshots** are charged per GB stored

---

# 06. Use Cases

- Boot volumes for EC2 instances  
- Databases (MySQL, PostgreSQL, MongoDB)  
- Enterprise applications  
- Log storage and analytics workloads  
- File systems attached to EC2

---

# 07. Difference: EBS vs S3 vs EFS

| Feature          | EBS                     | S3                     | EFS                     |
|------------------|------------------------|-----------------------|------------------------|
| Storage Type     | Block                  | Object                | File                   |
| Access           | EC2 only               | Internet / SDK        | EC2 + Lambda           |
| Durability       | 99.999%                | 11 9's                | 99.999%                |
| Scalability      | Limited by volume      | Virtually unlimited   | Virtually unlimited    |
| Use Case         | OS disks, databases    | Backup, archival      | Shared file storage     |

---

# 08. Best Practices

- Use **gp3 or io2** for databases and critical workloads  
- Enable **snapshots** for disaster recovery  
- Apply **encryption** for sensitive data  
- Monitor **IOPS and throughput** for performance tuning  
- Clean up **unused volumes** to reduce cost

---

# 09. Interview / Exam Notes

- EBS is **block storage** attached to EC2  
- Supports **snapshots** for backup  
- Volume types optimized for **performance vs cost**  
- Can **resize** volumes without downtime  
- Not shared across multiple instances (except Multi-Attach)

---

# 10. Diagram Idea

```text
[EC2 Instance] --> [EBS Volume] --> [Snapshots in S3]
         |
         |--> High Performance SSD (gp3/io2)
         |--> Throughput HDD (st1)
         |--> Cold HDD (sc1)