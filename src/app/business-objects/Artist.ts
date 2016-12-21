import {Album} from "./Album";
import {Image} from "./Image";
/**
 * Created by sajmera on 12/20/16.
 */

export class Artist{
  id:number;
  name:string;
  genres:any;
  albums:Album[];
  images: Image[];
}
