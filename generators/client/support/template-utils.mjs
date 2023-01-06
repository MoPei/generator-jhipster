/**
 * Copyright 2013-2023 the original author or authors from the JHipster project.
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
import { clientFrameworkTypes } from '../../../jdl/jhipster/index.mjs';

const { ANGULAR, VUE } = clientFrameworkTypes;

/**
 * @private
 * Generate Entity Client Imports
 *
 * @param {Array|Object} relationships - array of relationships
 * @param {string} dto - dto
 * @param {string} clientFramework the client framework, 'angular', 'vue' or 'react'.
 * @returns typeImports: Map
 */
// eslint-disable-next-line import/prefer-default-export
export const generateEntityClientImports = (relationships, dto, clientFramework) => {
  const typeImports = new Map();
  relationships.forEach(relationship => {
    const otherEntityAngularName = relationship.otherEntityAngularName;
    const importType = `I${otherEntityAngularName}`;
    let importPath;
    if (relationship.otherEntity?.builtInUser) {
      importPath = clientFramework === ANGULAR ? 'app/entities/user/user.model' : 'app/shared/model/user.model';
    } else {
      importPath =
        clientFramework === ANGULAR
          ? `app/entities/${relationship.otherEntityClientRootFolder}${relationship.otherEntityFolderName}/${relationship.otherEntityFileName}.model`
          : `app/shared/model/${relationship.otherEntityClientRootFolder}${relationship.otherEntityFileName}.model`;
    }
    typeImports.set(importType, importPath);
  });
  return typeImports;
};

/**
 * @private
 * Generate Entity Client Enum Imports
 *
 * @param {Array|Object} fields - array of the entity fields
 * @param {string} clientFramework the client framework, 'angular' or 'react'.
 * @returns typeImports: Map
 */
export const generateEntityClientEnumImports = (fields, clientFramework) => {
  const typeImports = new Map();
  const uniqueEnums = {};
  fields.forEach(field => {
    const { enumFileName, fieldType } = field;
    if (field.fieldIsEnum && (!uniqueEnums[fieldType] || (uniqueEnums[fieldType] && field.fieldValues.length !== 0))) {
      const importType = `${fieldType}`;
      const basePath = clientFramework === VUE ? '@' : 'app';
      const modelPath = clientFramework === ANGULAR ? 'entities' : 'shared/model';
      const importPath = `${basePath}/${modelPath}/enumerations/${enumFileName}.model`;
      uniqueEnums[fieldType] = field.fieldType;
      typeImports.set(importType, importPath);
    }
  });
  return typeImports;
};
