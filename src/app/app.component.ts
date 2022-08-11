import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public cardData = [
    {
      header: 'abcd',
      body: "tt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more - or - less normal distribution of letters as opposed to using 'Content here, content here",
    },
    {
      header: 'abcdeeeee',
      body: "tt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more - or - less normal distribution of letters as opposed to using 'Content here, content here",
    },
    {
      header: 'abcfffffd',
      body: "tt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more - or - less normal distribution of letters as opposed to using 'Content here, content here",
    },
    {
      header: 'abefefefcd',
      body: ' of using Lorem Ipsum is that it has',
    },
    {
      header: 'abcd',
      body: "tt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more - or - less normal distribution of letters as opposed to using 'Content here, content here",
    },
    {
      header: 'abcdeeeee',
      body: "tt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more - or - less normal distribution of letters as opposed to using 'Content here, content here",
    },
    {
      header: 'abcfffffd',
      body: "tt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more - or - less normal distribution of letters as opposed to using 'Content here, content here",
    },
    {
      header: 'abefefefcd',
      body: ' of using Lorem Ipsum is that it has',
    },
  ];
  name = 'Angular ' + VERSION.major;
}
