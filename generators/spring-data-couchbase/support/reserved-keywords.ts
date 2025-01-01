/**
 * Copyright 2013-2024 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const couchbaseReservedKeywords = [
  'ALL',
  'AND',
  'ANY',
  'APPLY',
  'AS',
  'ASC',
  'AT',
  'AUTOGENERATED',
  'BETWEEN',
  'BTREE',
  'BUCKET',
  'BY',
  'CASE',
  'CLOSED',
  'CREATE',
  'COMPACTION',
  'COMPACT',
  'CONNECT',
  'CONNECTED',
  'CORRELATE',
  'COLLECTION',
  'DATASET',
  'DATAVERSE',
  'DECLARE',
  'DEFINITION',
  'DECLARE',
  'DEFINITION',
  'DELETE',
  'DESC',
  'DISCONNECT',
  'DISTINCT',
  'DROP',
  'ELEMENT',
  'EXPLAIN',
  'ELSE',
  'ENFORCED',
  'END',
  'EVERY',
  'EXCEPT',
  'EXISTS',
  'EXTERNAL',
  'FEED',
  'FILTER',
  'FLATTEN',
  'FOR',
  'FROM',
  'FULL',
  'FUNCTION',
  'GROUP',
  'HAVING',
  'HINTS',
  'IF',
  'INTO',
  'IN',
  'INDEX',
  'INGESTION',
  'INNER',
  'INSERT',
  'INTERNAL',
  'INTERSECT',
  'IS',
  'JOIN',
  'KEYWORD',
  'KEY',
  'LEFT',
  'LETTING',
  'LET',
  'LIKE',
  'LIMIT',
  'LOAD',
  'NODEGROUP',
  'NGRAM',
  'NOT',
  'OFFSET',
  'ON',
  'OPEN',
  'OR',
  'ORDER',
  'OUTER',
  'OUTPUT',
  'PATH',
  'POLICY',
  'PRE-SORTED',
  'PRIMARY',
  'RAW',
  'REFRESH',
  'RETURN',
  'RTREE',
  'RUN',
  'SATISFIES',
  'SECONDARY',
  'SELECT',
  'SET',
  'SHADOW',
  'SOME',
  'TEMPORARY',
  'THEN',
  'TYPE',
  'TO',
  'UNION',
  'UNKNOWN',
  'UNNEST',
  'UPDATE',
  'USE',
  'USING',
  'VALUE',
  'WHEN',
  'WHERE',
  'WITH',
  'WRITE',
];

export const isReservedCouchbaseKeyword = (keyword: string) => couchbaseReservedKeywords.includes(keyword.toUpperCase());
