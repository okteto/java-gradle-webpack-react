package com.okteto.books;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

interface BookRepository extends CrudRepository<Book, Long> {

}