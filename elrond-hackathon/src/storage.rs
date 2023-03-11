elrond_wasm::imports!();
elrond_wasm::derive_imports!();
 
// STORAGE

#[elrond_wasm::module]
pub trait StorageModule {
    
    /// START TIMESTAMP
    #[storage_mapper("esdt_mapper")]
    fn start_timestamp(&self) -> SingleValueMapper<u64>;

    #[only_owner]
    #[endpoint(setStartTimestamp)]
    fn set_start_timestamp(&self, start_timestamp: u64) {
        self.start_timestamp().set(&start_timestamp)
    }

    #[view(getStartTimestamp)]
    fn get_start_timestamp(&self) -> SingleValueMapper<u64>
    {
        self.start_timestamp()
    }

}