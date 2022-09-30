const finishedTimeStamp = job.finishedOn
      const message = slackCustomMessage(
        'Evidence Collection',
        job.data.action.data.orgName,
        finishedTimeStamp,
        job.attemptsMade,
        job.opts.attempts,
        job.data.jobId
      )
