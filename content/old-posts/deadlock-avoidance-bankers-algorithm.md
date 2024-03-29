+++
title = "Deadlock Avoidance: The Banker's Algorithm"
date = 2019-10-17T21:16:56-04:00
tags = []
categories = []
draft = false
+++

[//]: # (tags = ["operating systems", "process synchronization", "algorithms"], categories = ["Computers and Software"])

## What's this? {#what-s-this}

If an operating system wishes to dynamically avoid deadlocks between processes that share resources in a mutually exclusive way with no preemption, then it needs to always ensure that it only allocates resources when a process asks for them if doing such does not put the system into an "unsafe" state (i.e., one in which deadlock could occur). To avoid this, there is the so-called "banker's algorithm." A very rough implementation:

```java
/* Variable declarations */

// Number of active processes
int N;

// Number of resource types
int M;

// Matrix for current resource allocation
// Each row is a different process
// Each column is a different resource type
int Allocation[N][M];

// Matrix for the remaining resources the process
// might need
int MightNeed[N][M];

// Array representing available resources for each
// resource type
int Available[M];

// Array representing which processes have finished
boolean Finished[N];


/*
 * Returns true if the state that comes about
 * from granting the resource request is a safe
 * state, and false otherwise.
 *
 * @param requestedResources:
 *        an array of size M representing the
 *        requested resource values.
 *
 * @return true if the resulting state is safe,
           false otherwise.
 */
boolean bankersAlgorithm(int[] requestedResources) {

  // See if the request is even possible to grant given
  // available resources
  for(int j = 0; j < M; j++) {
    if(requestedResources[j] > Available[j]) {
      return false;
    }
  }


  // If the request is at least possible, then
  // determine if the resulting state is safe or
  // not. This is the code we we talked about in
  // class.

  // A flag representing whether or not any
  // processes finished on a given iteration.
  boolean changed = true;

  // Keep track of the number of finished processes
  int numFinished = 0;

  while(changed) {
    changed = false;
    for(int = 0; i < N; i++) {

      // Only need to consider processes that
      // haven't already finished.
      if(Finished[i] == false) {

        // Have to make sure that all the
        // resources the process might need
        // can be used (from all types)
        boolean allResourcesMet = true
        for(int j = 0; j < M; j++) {
          if(MightNeed[i][j] > Available[j]) {
            allResourcesMet = false;
            break;
          }
        }

        // Only finish if all resources are met
        if(allResourcesMet) {
          Finished[i] = true;
          numFinished++;
          changed = true;

          // Add the finished process's resources
          // to the available pool
          for(int j = 0; j < M; j++) {
            Available[j] += Allocated[i][j];
          }
        }

      }// if Finished[i] == false
    }//for

    // If all processes are finished, we know
    // the resulting state is safe
    if(numFinished == Finished.length) {
      return true;
    }

  }//while

  // If we make an iteration without any process(es)
  // finishing (thus breaking out of the while loop),
  // this means that deadlock has occurred, and we
  // thus return false
  return false;

} //bankersAlgorithm()
```
