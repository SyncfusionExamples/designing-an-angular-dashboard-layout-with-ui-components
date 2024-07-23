import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import { ChartAllModule, AccumulationChartAllModule } from '@syncfusion/ej2-angular-charts';
import { GridModule } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardLayoutModule, ChartAllModule, AccumulationChartAllModule, GridModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public transactionData = [
    { category: "Food", image: "../food.png", amount: 6, paymentMode: "Debit Card", iconCss: "food", isExpense: true, isIncome: false, transactoinId: "#131614678", description: "Palmetto Cheese, Mint julep" },
    { category: "Transportation", image: "../travel.png", amount: 7, paymentMode: "Debit Card", iconCss: "travel", isExpense: true, isIncome: false, transactoinId: "#131416876", description: "Other vehicle expenses" },
    { category: "Housing", image: "../housing.png", amount: 20, paymentMode: "Credit Card", iconCss: "housing", isExpense: true, isIncome: false, transactoinId: "#1711148579", description: "Laundry and cleaning supplies" },
    { category: "Extra Income", image: "../extra-income.png", amount: 110, paymentMode: "Cash", iconCss: "extra-income", isExpense: false, isIncome: true, transactoinId: "#1922419785", description: "Income from Sale" },
    { category: "Food", image: "../food.png", amount: 10, paymentMode: "Credit Card", iconCss: "food", isExpense: true, isIncome: false, transactoinId: "#2744145880", description: "Muffuletta sandwich, Mint julep" }];
 
  public PieRenderingData = [
    { x: "Mortgage / Rent", text: "15.76%", y: 6000 },
    { x: "Food", text: "12.79%", y: 4866 },
    { x: "Utilities", text: "10.93%", y: 4160 },
    { x: "Bills", text: "10.4%", y: 3960 },
    { x: "Shopping", text: "8.87%", y: 3375 },
    { x: "Transportation", text: "8.49%", y: 3230 },
    { x: "Insurance", text: "7.59%", y: 2890 },
    { x: "Health Care", text: "6.52%", y: 2480 },
    { x: "Clothing", text: "5.92%", y: 2255 },
    { x: "Others", text: "12.73%", y: 4844 }
  ];

  public startAngle: number = 0;
  
  public endAngle: number = 360;
 
  piedataLabel: object = {
    visible: true, position: 'Outside', name: 'x',
  };
  
  public primaryXAxis = {
    valueType: 'DateTimeCategory',
    intervalType: 'Months',
    labelFormat: 'MMM'
  };
  public primaryYAxis: Object = {
    minimum: 1000,
    maximum: 9000,
    interval: 2000
  };


  public incomeExpenseData = [
    { period: new Date('2017-01-01'), income: 7490, expense: 6973 },
    { period: new Date('2021-02-01'), income: 6840, expense: 6060 },
    { period: new Date('2021-03-01'), income: 6060, expense: 5500 },
    { period: new Date('2012-04-01'), income: 8190, expense: 7059 },
    { period: new Date('2021-05-01'), income: 7320, expense: 6333 },
    { period: new Date('2021-06-01'), income: 7380, expense: 6135 }
  ];


  public chartData: Object[] = [
    { x: new Date(2023, 0, 1), y: 5000 },
    { x: new Date(2023, 1, 1), y: 7000 },
    { x: new Date(2023, 2, 1), y: 8000 },
  ];
}
