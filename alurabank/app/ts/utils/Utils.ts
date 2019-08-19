import { Entity } from '../models/Entity';

export function imprime(...objetcs: Entity[]) {
    objetcs.forEach(objeto => objeto.toString());
}