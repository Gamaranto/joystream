use rstd::prelude::*;
#[cfg(feature = "std")]
use serde::{Deserialize, Serialize};

use codec::{Decode, Encode};

/// Represents a discussion thread
#[cfg_attr(feature = "std", derive(Serialize, Deserialize, Debug))]
#[derive(Encode, Decode, Default, Clone, PartialEq, Eq)]
pub struct Thread<ThreadAuthorId, BlockNumber> {
    /// Title
    pub title: Vec<u8>,

    /// When thread was established.
    pub created_at: BlockNumber,

    /// Author of the thread.
    pub author_id: ThreadAuthorId,
}

/// Post for the discussion thread
#[cfg_attr(feature = "std", derive(Serialize, Deserialize, Debug))]
#[derive(Encode, Decode, Default, Clone, PartialEq, Eq)]
pub struct Post<PostAuthorId, BlockNumber, ThreadId> {
    /// Text
    pub text: Vec<u8>,

    /// When post was added.
    pub created_at: BlockNumber,

    /// When post was updated last time.
    pub updated_at: BlockNumber,

    /// Author of the post.
    pub author_id: PostAuthorId,

    /// Parent thread id for this post
    pub thread_id: ThreadId,

    /// Defines how many times this post was edited. Zero on creation.
    pub edition_number: u32,
}

/// Post for the discussion thread
#[cfg_attr(feature = "std", derive(Serialize, Deserialize, Debug))]
#[derive(Encode, Decode, Default, Clone, Copy, PartialEq, Eq)]
pub struct ThreadCounter<ThreadAuthorId> {
    /// Author of the threads.
    pub author_id: ThreadAuthorId,

    /// ThreadCount
    pub counter: u32,
}

impl<ThreadAuthorId: Clone> ThreadCounter<ThreadAuthorId> {
    /// Increments existing counter
    pub fn increment(&self) -> Self {
        ThreadCounter {
            counter: self.counter + 1,
            author_id: self.author_id.clone(),
        }
    }

    /// Creates new counter by author_id. Counter instantiated with 1.
    pub fn new(author_id: ThreadAuthorId) -> Self {
        ThreadCounter {
            author_id,
            counter: 1,
        }
    }
}
