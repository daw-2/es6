import { get } from "./get";
import env from "../env";

export function addition(...numbers) {
  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }

  return sum;
}

export function square(number) {
  return number * number;
}

export default function substraction(...numbers) {
  let sum = 0;

  for (let number of numbers) {
    sum -= number;
  }

  return sum;
}

export async function getUsers() {
  let users;

  try {
    users = await get(`${env.url}/users`);
  } catch (e) {
    throw e;
  }

  users.sort(() => -1);

  return users;
}