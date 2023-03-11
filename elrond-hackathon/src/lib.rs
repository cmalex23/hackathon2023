#![no_std]
elrond_wasm::imports!();
elrond_wasm::derive_imports!();

mod storage; 

/// Hackathon contract
#[elrond_wasm::contract]
pub trait Hackathon : 
    crate::storage::StorageModule 
    {
    #[init]
    fn init(&self, start_timestamp: u64) {
        self.start_timestamp().set(start_timestamp);
    }

}
