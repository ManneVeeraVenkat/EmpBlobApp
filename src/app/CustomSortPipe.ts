import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: any[], order: string = 'ascending'): any[] {
    if (!Array.isArray(value) || value.length <= 1) {
      return value;
    }

    // Clone the array to avoid modifying the original data
    const sortedArray = [...value];

    sortedArray.sort((a, b) => {
      // Ensure that both a and b are non-null
      if (a == null || b == null) {
        return 0;
      }

      // Detect the data type of a and b
      const aIsNumber = typeof a === 'number';
      const bIsNumber = typeof b === 'number';

      // Compare a and b based on their data types
      if (aIsNumber && bIsNumber) {
        // Both are numbers, perform numeric comparison
        return order === 'ascending' ? a - b : b - a;
      } else if (!aIsNumber && !bIsNumber) {
        // Both are strings, perform string comparison
        return order === 'ascending' ? a.localeCompare(b) : b.localeCompare(a);
      } else if (aIsNumber) {
        // a is a number, b is a string (numbers come before strings)
        return -1;
      } else {
        // a is a string, b is a number (strings come after numbers)
        return 1;
      }
    });

    return sortedArray;
  }
}
