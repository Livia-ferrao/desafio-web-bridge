package com.bridge.backend.service;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class NumberServiceTests {

    @Test
    public void countPrimesLessThan() {

        NumberService numberService = new NumberService();
        
        // Teste para o número 10
        int result1 = numberService.countPrimesLessThan(10);
        assertEquals(4, result1); // Existem 4 números primos menores que 10: 2, 3, 5, 7
        
        // Teste para o número 20
        int result2 = numberService.countPrimesLessThan(20);
        assertEquals(8, result2); // Existem 8 números primos menores que 20: 2, 3, 5, 7, 11, 13, 17, 19
        
        // Teste para o número 2
        int result3 = numberService.countPrimesLessThan(2);
        assertEquals(0, result3); // Não há números primos menores que 2
        
        // Teste para o número 1
        int result4 = numberService.countPrimesLessThan(1);
        assertEquals(0, result4); // Não há números primos menores que 1
    }

}
