


# 2️ Segundos pasos



Una vez visto lo básico del cliente, miremos lo pertinente enfocado a los contratos inteligentes, como es:

* Creación de un contratos.
* Compilación de contratos.
* Despliegue.
* Ejecución de contrato.

**Creación de un contrato**\
Syntaxis:\
`stellar contract init "nombre_contrato"`

`stellar contract init hola_mundo`



![1](https://raw.githubusercontent.com/StellarEspanol/Soroban/main/.gitbook/assets/image%20(24).png)

**Estructura y archivos creados**


![2](https://raw.githubusercontent.com/StellarEspanol/Soroban/main/.gitbook/assets/image%20(25).png)



Dentro de lib.rs está el contrato por defecto

```
#![no_std]
use soroban_sdk::{contract, contractimpl, vec, Env, String, Vec};

#[contract]
pub struct Contract;

#[contractimpl]
impl Contract {
    pub fn hello(env: Env, to: String) -> Vec<String> {
        vec![&env, String::from_str(&env, "Hello"), to]
    }
}

mod test;
```

**Compilación del contrato**\
Se ejecuta el siguiente comando:\




```
stellar contract build
```

![3](https://raw.githubusercontent.com/StellarEspanol/Soroban/main/.gitbook/assets/image%20(26).png)


![4](https://raw.githubusercontent.com/StellarEspanol/Soroban/main/.gitbook/assets/image%20(27).png)



Podemos ver que se creo una carpeta llamada release, más internamente vemos que está creado el archivo hello\_world.wasm

💡el nombre del archivos en web assembly es el que automáticamente se pone dentro del archivo Cargo.toml

**Despliegue del contrato**

\
**Mac/linux**

```
stellar contract deploy \
--wasm /<RUTA_DE_LA_CARPETA>/target/wasm32-unknown-unknown/release/hello_world.wasm \
--source developer \
--network testnet \
--alias hello_world
```

**Windows**

```
stellar contract deploy `
--wasm /<RUTA_DE_LA_CARPETA>/target/wasm32-unknown-unknown/release/hello_world.wasm `
--source developer `
--network testnet `
--alias hello_world
```



Felicidades, ya tienes el contratro deplegado en testnet 🥳


![5](https://raw.githubusercontent.com/StellarEspanol/Soroban/main/.gitbook/assets/image%20(28).png)



https://stellar.expert/explorer/testnet/contract/CDCIWIAOWCDIORMZWV53VY5DVLOGB5PWG4ETSAEKKHX43RZVSPYUSLRS?filter=history 
Link del contrato desplegado en la red testnet de Stellar


**Interactuando con los contratos**\
**Sintaxis**\
`stellar contract invoke`\
`--id "contrato"`\
`--source "identidad"`\
`--network testnet`\
`--`\
`"función"`\
`--"parametro" "dato del parámetro"`

**Linux y MAC**

```
stellar contract invoke \
--id CDCIWIAOWCDIORMZWV53VY5DVLOGB5PWG4ETSAEKKHX43RZVSPYUSLRS \
--source developer \
--network testnet \
-- \
hello \
--to Pascual
```

**Windows**

```
stellar contract invoke `
--id CDCIWIAOWCDIORMZWV53VY5DVLOGB5PWG4ETSAEKKHX43RZVSPYUSLRS `
--source developer `
--network testnet `
-- `
hello `
--to Manolo
```



**El resultado es:**




![5](https://raw.githubusercontent.com/StellarEspanol/Soroban/main/.gitbook/assets/image%20(29).png)

