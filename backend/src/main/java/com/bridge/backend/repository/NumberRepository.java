package com.bridge.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bridge.backend.model.Number;

@Repository
public interface NumberRepository extends JpaRepository<Number, Long> {
    
}
