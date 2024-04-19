package com.bridge.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bridge.backend.model.Number;
import com.bridge.backend.repository.NumberRepository;

@Service
public class NumberService {

    @Autowired
	private NumberRepository numberRepository;

    public List<Number> getAll() {
        return numberRepository.findAll();
    }

    public void insert(Number number) {

        long startTime = System.currentTimeMillis();
        int numberCount = countPrimesLessThan(number.getInput());
        long endTime = System.currentTimeMillis();
        
        long executionTime = endTime - startTime;
        number.setCount(numberCount);
        number.setExecutionTime(executionTime);

        numberRepository.save(number);
    }

    private int countPrimesLessThan(int k) {
        int count = 0;
        for (int i = 2; i < k; i++) {
            if (isPrime(i)) {
                count++;
            }
        }
        return count;
    }

    private boolean isPrime(int number) {
        if (number <= 1) return false;
        for (int i = 2; i * i <= number; i++) {
            if (number % i == 0) return false;
        }
        return true;
    }
}
