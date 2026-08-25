import type { Section } from '../types'

export const caching: Section = {
  id: 'caching',
  title: 'Caching — ElastiCache & DAX',
  scene: 'db-caching',
  slide: `## Caching — ElastiCache & DAX

The fastest database query is the one you never run. Put an **in-memory cache** in front of the DB.

### Hit vs miss
- The app reads the **cache first**; a **hit** is served from RAM in **microseconds** — the DB is never touched
- A **miss** falls through to the database, then the result is **written back** to the cache for next time
- Net effect: **lower latency** *and* less load on the database (fewer reads reach it)

### Two managed caches
- **Amazon ElastiCache** — managed **Redis / Memcached** in front of a relational DB; also great for **sessions, leaderboards, rate limiting**
- **DynamoDB Accelerator (DAX)** — a purpose-built in-memory cache for DynamoDB; drops reads from **milliseconds to microseconds**, no code change

**The trade-off:** caches hold *copies*, so data can be briefly **stale** — cache what tolerates it, set a sensible **TTL**.`,
  narration:
    "Here's a technique that applies to every database we've talked about, relational or NoSQL: caching. The principle is simple — the fastest query is the one you never have to run — and the way you achieve that is by putting an in-memory cache in front of your database. A cache keeps data in RAM, which is dramatically faster than going to a database on disk, and the pattern works like this. When your application needs to read something, it checks the cache first. If the data is there — that's a cache hit — it comes straight back from memory in microseconds, and the database is never even contacted. If it's not there — a cache miss — the app goes to the database as usual, gets the answer, and then writes that answer into the cache on the way back, so the next time anyone asks for the same thing, it's a hit. This is called the lazy-loading or cache-aside pattern, and it does two good things at once: your reads get much faster, and, just as importantly, a huge fraction of your read traffic never reaches the database, which takes load off it and lets it handle more. On AWS there are two managed caching services to know. The first is Amazon ElastiCache, which gives you managed Redis or Memcached — the two most popular in-memory data stores — and you typically put it in front of a relational database like RDS or Aurora. ElastiCache is also useful on its own for things like user session storage, gaming leaderboards, and rate limiting, anything that wants microsecond access to hot data. The second is DAX, DynamoDB Accelerator, which is a caching layer built specifically for DynamoDB. DynamoDB is already fast at single-digit milliseconds, but DAX puts a cache right in front of it and takes cached reads down into microseconds — and because it's API-compatible, you often get that speedup with essentially no code change. Now, the one thing you must always keep in mind with any cache is that it holds copies of your data, which means those copies can be slightly out of date, or stale, if the underlying data changes. So you cache the things that can tolerate being a little stale — a product description, a user profile, a leaderboard — and you set a sensible time-to-live, a TTL, so entries expire and refresh. Used well, caching is one of the highest-leverage things you can do for both performance and cost. We've now seen the whole toolkit — relational, NoSQL, and caching — so the final section pulls it together into how you actually choose.",
}
