import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'ng2-mat-multiselect',
  templateUrl: './ng2-mat-multiselect.component.html',
  styleUrls: ['./ng2-mat-multiselect.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Ng2MatMultiselectComponent implements OnInit {
    // formGroup of form controls
    form !: FormGroup;
    // for selectAll
    allComplete: boolean = false;
    // items to be filtered
    filteredItems: any;
    // value to filter from items
    filterValue!: string;
    // resultant array of object after filtering
    itemsByFiltered: any[] = [];
    // final items
    resultItems: string[] = [];
    // to check either data is available or not
    isDataAvailable: boolean = false;
    // array of resultant from filter
    searchResult: object[] = [];
    // get the array of object for items entered by user
    @Input() item: any[] = [];
    // get the value of color
    @Input() color: ThemePalette = 'primary';

    @Input() displayKey: string = ''; // get the value of displaykey

    @Input() searchKey: string[] = []; // get the value of searchkey

    @Input() inputTitle: string = ''; // get the value title for plugin

    @Input() appearance: any = 'outline'; // get the appearance type

    @Output() selectedItems = new EventEmitter<any>(); // event to send of selected items


    constructor(public fb: FormBuilder) { }

    ngOnInit() {
      this.form = this.fb.group({
        selectControl: new FormControl(''),
        itemControl: new FormControl('')
      });

      this.item = this.item.map(data => ({ ...data, isChecked: false }));

      this.itemsByFiltered = this.item;

      this.form.controls['itemControl'].valueChanges.subscribe((data: string | null) => {
        if (data) {
          this.itemsByFiltered = this.filter(data)
        }
        else {
          this.itemsByFiltered = this.item
        }

      });
    }


    ngOnChanges() { }
     /**
      * For filtering the typed value in searchbar.
      * @param value --> Text typed in searchbar
      */
      private filter(value: string): any {
      const filterValue = value.toLowerCase();
      for (let searchKey of this.searchKey) {
          this.searchResult = this.item.filter((data) =>
            data[searchKey]?.toString()?.toLowerCase()?.includes(filterValue));
          if (this.searchResult.length > 0) {
            return this.searchResult;
          }
      }
    }


    /**
    * For remove chip from select.
    * @param chip --> chip name which we want to remove
    */
    onChipRemoved(chip: any) {
      this.removeChipData(chip);
      this.sendData(this.form.controls['selectControl'].value)
    }

    removeChipData(chip: any) {
      let chipData = this.form.controls['selectControl'].value;
      const updatedChips = this.removeChip(chipData, chip);
      this.form.controls['selectControl'].setValue(updatedChips);
      for (let data of this.item) {
        if (chip[this.displayKey] == data[this.displayKey]) {
          this.changeCheck(data)
        }
      }
    }

    /**
      * Function for remove chip from array of selected chip.
      * @param chipData --> array of selected chip
      * @param toRemove --> chip we want to remove from array
    */
     removeChip(chipData: any , toRemove: any) {
      const updatedItem = chipData.filter((item: any) => item[this.displayKey] !== toRemove[this.displayKey])
      return updatedItem;
    }

     /**
      * To select all checkbox and change in checkbox value
      * @param completed --> Boolean value of select all checkbox
      */
    setAll(completed: boolean) {
      this.allComplete = completed;
      let resultItems = [];
      if (completed) {
        if (this.itemsByFiltered) {
          for (let item of this.itemsByFiltered) {
            let items = item;
            resultItems.push(items);
          }
          this.form.controls['selectControl'].setValue(resultItems);
        }
        this.sendData(this.form.controls['selectControl'].value)
      }
      else {
       for (let item of this.item) {
          if (this.displayKey) {
            this.removeChipData(item)
          }
        }
        this.sendData(this.form.controls['selectControl'].value)
      }
      this.item.map(t => (t.isChecked = completed));
    }


     /**
      * Function for toggle the select panel
      */
    toggleSelectPanel(){
      this.itemsByFiltered = this.item;
      this.form.controls['itemControl'].setValue('')
    }

     /**
      * Function for changing value of checkbox
      * @param event --> Event of which we want to change checkvalue
      */
    changeCheck(event: any) {
      event.isChecked = !event.isChecked;
      if (this.allComplete) {
        this.allComplete = false;
      }
      else if (!event.isChecked) {
        this.allComplete = false
      }
    }


     /**
      * Sending output data to the user
      * @param event --> Event for output send to user
      */
     onSelectionChange(event: any): void {
      this.sendData(event.value);
    }

    /**
     * Return the selectedItems
     */
    sendData(data: any) {
      const updatedArr = data.map(({isChecked, ...rest}: any) => {
        return rest;
      });
      this.selectedItems.emit(updatedArr);
    }
}
