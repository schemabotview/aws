import type { Section } from '../types'

export const managedDatabases: Section = {
  id: 'managed-databases',
  title: 'Managed databases — why RDS',
  scene: 'managed-db',
  slide: `## Managed databases — why RDS

Your app can run and serve requests; now it needs to **store and query structured data** reliably — a database.

### The undifferentiated heavy lifting
- You *could* install MySQL/PostgreSQL yourself on EC2 — but running a production DB is relentless ops: **patching, backups, replication & failover, scaling, securing**
- Essential work that doesn't make your product special — exactly what the cloud removes

### Amazon RDS takes it over
- Pick an **engine** (MySQL · PostgreSQL · MariaDB · SQL Server · Oracle); AWS runs it — patching, automated **backups & point-in-time recovery**, **Multi-AZ** failover, one-click scaling
- **You keep the part that matters**: schema, queries, and your data. Almost every team should use a managed DB`,
  narration:
    "With compute, storage, and networking in place, your application can run and serve requests. The thing it needs next is a reliable place to store and query structured data — a database. Now, you could install a database engine like MySQL or PostgreSQL yourself, on an EC2 instance, and occasionally people do. But running a production database is a huge, relentless operational job. You have to install and configure it, patch it constantly for security, take regular backups and actually test that you can restore them, set up replication and automatic failover so it survives a hardware failure, scale it as your load grows, and lock it down. This is the textbook example of what people call undifferentiated heavy lifting — work that is absolutely essential but does nothing to make your particular product special, and it is exactly the kind of toil the cloud exists to take off your plate. So AWS offers managed database services, and the flagship is Amazon RDS, the Relational Database Service. With RDS, you choose an engine — MySQL, PostgreSQL, MariaDB, SQL Server, or Oracle — and AWS runs it for you: it handles the patching, it takes automated backups and gives you point-in-time recovery, it manages Multi-AZ replication and automatic failover, and it lets you scale with essentially a click. What is left for you is precisely the part that matters to your application: designing a good schema, writing your queries, and managing your actual data. That division of labour is the entire point of a managed database — you focus on your data, and AWS focuses on keeping the database itself healthy. The practical takeaway is that almost every team should reach for a managed database rather than running their own; you would only self-manage for an unusual engine or a special requirement that RDS does not support. This whole course is about those managed database services, and, just as importantly, how to choose the right one — because relational databases are only one shape of data. That is where we start next: SQL versus NoSQL.",
}
