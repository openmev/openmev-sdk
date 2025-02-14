import { keccak256 } from '@ethersproject/keccak256';
import { toUtf8Bytes } from '@ethersproject/strings';

export function rawBody(text: string): string {
  return keccak256(toUtf8Bytes(text));
}
