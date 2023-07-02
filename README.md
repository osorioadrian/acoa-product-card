# Acoa-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Adrian Osorio

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'acoa-product-card'
```

```
<ProductCard
    product={ product }
    initialValues={{
    count: 4,
    maxCount: 10
    }}
>
    {
    () => (
        <>
        <ProductImage/>
        <ProductTitle/>
        <ProductButtons/>
        </>
    )
    }
</ProductCard>
```
